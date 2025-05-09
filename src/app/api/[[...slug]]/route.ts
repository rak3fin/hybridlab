// /app/api/[[...slug]]/route.ts
import { NextResponse } from 'next/server';
import mongoose, { Schema, model, models } from 'mongoose';

/* ------------------------------------------------------------------ */
/* 1) Connect to MongoDB – only once                                   */
/* ------------------------------------------------------------------ */
const MONGODB_URI =
  process.env.MONGODB_URI ||
  'mongodb+srv://appifinity:FFueogx8YgyC8CzF@appifinity.ym3dche.mongodb.net/hybridlabs';

if (!mongoose.connection.readyState) {
  mongoose
    .connect(MONGODB_URI)
    .catch(err => console.error('MongoDB connection error →', err));
}

/* ------------------------------------------------------------------ */
/* 2) Schemas & Models                                                */
/* ------------------------------------------------------------------ */
const opt = { timestamps: true };        // add createdAt / updatedAt

// “log” collections – multiple documents are allowed
const contactSchema        = new Schema({ firstName:String,lastName:String,phone:String,email:String,message:String }, opt);
const macroCalculatorSchema= new Schema({ gender:String,heightType:String,weightType:String,height:String,weight:String,name:String,phone:String,email:String }, opt);
export const ContactUs        = models.ContactUs        || model('ContactUs',        contactSchema);
export const MacroCalculator  = models.MacroCalculator  || model('MacroCalculator',  macroCalculatorSchema);

// “singleton” collections – only ONE document should exist
const enrollLinkSchema     = new Schema({ url:String }, opt);
const appLinkSchema        = new Schema({ url:String }, opt);
const membershipLinkSchema = new Schema({ monthly:String, annual:String }, opt);
const trainingProgramSchema= new Schema({
  training_link_1:{type:String,required:true},
  training_link_2:{type:String,required:true},
  training_link_3:{type:String,required:true},
  training_link_4:{type:String,required:true},
  training_link_5:{type:String,required:true},
  training_link_6:{type:String,required:true},
}, opt);

export const EnrollLink     = models.EnrollLink     || model('EnrollLink',     enrollLinkSchema);
export const AppLink        = models.AppLink        || model('AppLink',        appLinkSchema);
export const MembershipLink = models.MembershipLink || model('MembershipLink', membershipLinkSchema);
export const TrainingProgram= models.TrainingProgram|| model('TrainingProgram',trainingProgramSchema);

/* ------------------------------------------------------------------ */
/* 3) Helpers                                                         */
/* ------------------------------------------------------------------ */
// → “contactus”, “membership-link”, “training-program”, “admin/validate”, …
function getEndpoint(url: string): string {
  const parts = new URL(url).pathname.split('/').filter(Boolean);
  return parts.slice(1).join('/');             // drop the leading “api”
}

// Shorthand for “singleton” collections
async function getSingleton(Model: mongoose.Model<any>) {
  return Model.findOne({}).lean();
}
async function upsertSingleton(Model: mongoose.Model<any>, data: any) {
  return Model.findOneAndUpdate({}, data, { new:true, upsert:true, setDefaultsOnInsert:true });
}

/* ------------------------------------------------------------------ */
/* 4) GET handler                                                     */
/* ------------------------------------------------------------------ */
export async function GET(request: Request) {
  const ep = getEndpoint(request.url);

  try {
    switch (ep) {
      /* ---------- log collections ---------- */
      case 'contactus':         return NextResponse.json(await ContactUs.find({}));
      case 'macro_calculator':  return NextResponse.json(await MacroCalculator.find({}));

      /* ---------- singleton collections ---------- */
      case 'enroll-link':       return NextResponse.json(await getSingleton(EnrollLink)     ?? {});
      case 'app-link':          return NextResponse.json(await getSingleton(AppLink)        ?? {});
      case 'membership-link':   return NextResponse.json(await getSingleton(MembershipLink) ?? {});
      case 'training-program':  return NextResponse.json(await getSingleton(TrainingProgram)?? {});

      /* ---------- misc ---------- */
      case 'admin/validate':
        return NextResponse.json({ error:'Method not allowed' },{ status:405 });

      default:
        return NextResponse.json({ error:'Endpoint not found' },{ status:404 });
    }
  } catch (err) {
    return NextResponse.json({ error:'Database error', details:String(err) },{ status:500 });
  }
}

/* ------------------------------------------------------------------ */
/* 5) POST handler                                                    */
/* ------------------------------------------------------------------ */
export async function POST(request: Request) {
  const ep   = getEndpoint(request.url);
  const body = await request.json();

  try {
    /* ---------- admin password check ---------- */
    if (ep === 'admin/validate') {
      const ADMIN = process.env.ADMIN_PASSWORD ||
        'Asqp>#WQcj:G^fXUpAP$vkp5gEc0VxhvgJuB.d4$#F2Ue5sg+:3UtqV%+rxX4Axd';
      return body.password === ADMIN
        ? NextResponse.json({ success:true })
        : NextResponse.json({ success:false,error:'Invalid password' },{ status:401 });
    }

    /* ---------- log collections (always create) ---------- */
    if (ep === 'contactus')        return NextResponse.json(
                                      { message:'Contact saved', data:await ContactUs.create(body) },
                                      { status:201 });
    if (ep === 'macro_calculator') return NextResponse.json(
                                      { message:'Macro saved', data:await MacroCalculator.create(body) },
                                      { status:201 });

    /* ---------- singleton collections (update or insert) ---------- */
    if (ep === 'enroll-link')      return NextResponse.json(
                                      { message:'Enroll link saved', data:await upsertSingleton(EnrollLink, body) },
                                      { status:201 });
    if (ep === 'app-link')         return NextResponse.json(
                                      { message:'App link saved', data:await upsertSingleton(AppLink, body) },
                                      { status:201 });
    if (ep === 'membership-link')  return NextResponse.json(
                                      { message:'Membership links saved', data:await upsertSingleton(MembershipLink, body) },
                                      { status:201 });
    if (ep === 'training-program') return NextResponse.json(
                                      { message:'Training program saved', data:await upsertSingleton(TrainingProgram, body) },
                                      { status:201 });

    /* ---------- default ---------- */
    return NextResponse.json({ error:'Endpoint not found' },{ status:404 });
  } catch (err) {
    return NextResponse.json({ error:'Database error', details:String(err) },{ status:500 });
  }
}
