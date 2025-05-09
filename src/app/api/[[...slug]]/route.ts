// /app/api/[[...slug]]/route.ts
import { NextResponse }           from 'next/server';
import mongoose, {
  Schema, model, models, Document, Model
}                                  from 'mongoose';

/* ───── DB connection (once) ───── */
const MONGODB_URI =
  process.env.MONGODB_URI ??
  'mongodb+srv://appifinity:FFueogx8YgyC8CzF@appifinity.ym3dche.mongodb.net/hybridlabs';
if (!mongoose.connection.readyState) {
  mongoose.connect(MONGODB_URI).catch(err =>
    console.error('MongoDB connection error:', err)
  );
}

/* ───── Schemas & Models ───── */
/* multi‑doc collections */
const contactSchema = new Schema(
  { firstName:String, lastName:String, phone:String, email:String, message:String },
  { timestamps:true }
);
const ContactUs = models.ContactUs || model('ContactUs', contactSchema);

const macroCalculatorSchema = new Schema(
  {
    gender:String, heightType:String, weightType:String,
    height:String, weight:String, name:String, phone:String, email:String
  },
  { timestamps:true }
);
const MacroCalculator = models.MacroCalculator || model('MacroCalculator', macroCalculatorSchema);

/* singleton link collections */
const enrollLinkSchema     = new Schema({ url:String },                        { timestamps:true });
const appLinkSchema        = new Schema({ url:String },                        { timestamps:true });
const membershipLinkSchema = new Schema({ monthly:String, annual:String },     { timestamps:true });
const trainingProgramSchema = new Schema(
  {
    training_link_1:{ type:String, required:true },
    training_link_2:{ type:String, required:true },
    training_link_3:{ type:String, required:true },
    training_link_4:{ type:String, required:true },
    training_link_5:{ type:String, required:true },
    training_link_6:{ type:String, required:true },
  },
  { timestamps:true }
);

const EnrollLink      = models.EnrollLink      || model('EnrollLink',      enrollLinkSchema);
const AppLink         = models.AppLink         || model('AppLink',         appLinkSchema);
const MembershipLink  = models.MembershipLink  || model('MembershipLink',  membershipLinkSchema);
const TrainingProgram = models.TrainingProgram || model('TrainingProgram', trainingProgramSchema);

/* ───── Helpers ───── */
function endpointFromURL(url: string) {
  const parts = new URL(url).pathname.split('/').filter(Boolean);
  return parts.slice(1).join('/');
}

/** strict single‑doc upsert */
function upsertSingleton<T extends Document>(
  Model: Model<T>,
  update: Partial<T>
) {
  return Model.findOneAndUpdate(
    {},
    update,
    { new:true, upsert:true, setDefaultsOnInsert:true, strict:false }
  );
}

/** returns `[doc]` or `[]` (never null) */
async function latestDocArray<T>(Model: Model<T>) {
  const doc = await Model.findOne({}).sort({ updatedAt:-1, createdAt:-1, _id:-1 });
  return doc ? [doc] : [];
}

/* ───── GET ───── */
export async function GET(request: Request) {
  const ep = endpointFromURL(request.url);

  if (ep === 'admin/validate')
    return NextResponse.json({ error:'Method not allowed' }, { status:405 });

  try {
    switch (ep) {
      case 'contactus':
        return NextResponse.json(await ContactUs.find({}));

      case 'macro_calculator':
        return NextResponse.json(await MacroCalculator.find({}));

      /* link endpoints → always array with 0‒1 element */
      case 'enroll-link':
        return NextResponse.json(await latestDocArray(EnrollLink));

      case 'app-link':
        return NextResponse.json(await latestDocArray(AppLink));

      case 'membership-link':
        return NextResponse.json(await latestDocArray(MembershipLink));

      case 'training-program':
        return NextResponse.json(await latestDocArray(TrainingProgram));

      default:
        return NextResponse.json({ error:'Endpoint not found' }, { status:404 });
    }
  } catch (err) {
    return NextResponse.json(
      { error:'Database error', details:String(err) },
      { status:500 }
    );
  }
}

/* ───── POST (unchanged) ───── */
export async function POST(request: Request) {
  const ep   = endpointFromURL(request.url);
  const body = await request.json();

  try {
    if (ep === 'admin/validate') {
      const adminPassword = process.env.ADMIN_PASSWORD ??
        'Asqp>#WQcj:G^fXUpAP$vkp5gEc0VxhvgJuB.d4$#F2Ue5sg+:3UtqV%+rxX4Axd';
      return body.password === adminPassword
        ? NextResponse.json({ success:true })
        : NextResponse.json({ success:false, error:'Invalid password' }, { status:401 });
    }

    if (ep === 'contactus') {
      const doc = await ContactUs.create(body);
      return NextResponse.json({ message:'Contact saved', data:doc }, { status:201 });
    }
    if (ep === 'macro_calculator') {
      const doc = await MacroCalculator.create(body);
      return NextResponse.json({ message:'Macro data saved', data:doc }, { status:201 });
    }

    if (ep === 'enroll-link') {
      const doc = await upsertSingleton(EnrollLink, { url:body.url });
      return NextResponse.json({ message:'Enroll link saved', data:doc }, { status:201 });
    }
    if (ep === 'app-link') {
      const doc = await upsertSingleton(AppLink, { url:body.url });
      return NextResponse.json({ message:'App link saved', data:doc }, { status:201 });
    }
    if (ep === 'membership-link') {
      const doc = await upsertSingleton(MembershipLink, {
        monthly:body.monthly, annual:body.annual
      });
      return NextResponse.json({ message:'Membership link saved', data:doc }, { status:201 });
    }
    if (ep === 'training-program') {
      const doc = await upsertSingleton(TrainingProgram, body);
      return NextResponse.json({ message:'Training program saved', data:doc }, { status:201 });
    }

    return NextResponse.json({ error:'Endpoint not found' }, { status:404 });
  } catch (err) {
    return NextResponse.json(
      { error:'Database error', details:String(err) },
      { status:500 }
    );
  }
}
