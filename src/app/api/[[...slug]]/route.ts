// /app/api/[[...slug]]/route.ts
import { NextResponse } from 'next/server';
import mongoose, { Schema, model, models } from 'mongoose';

/* 1) Connect to MongoDB (only once) */
const MONGODB_URI = process.env.MONGODB_URI ||
  'mongodb+srv://appifinity:FFueogx8YgyC8CzF@appifinity.ym3dche.mongodb.net/';
if (!mongoose.connection.readyState) {
  mongoose.connect(MONGODB_URI).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });
}

/* 2) Schemas & Models */

// Contact Us
const contactSchema = new Schema({
  firstName: String,
  lastName: String,
  phone: String,
  email: String,
  message: String,
});
const ContactUs = models.ContactUs || model('ContactUs', contactSchema);

// Macro Calculator
const macroCalculatorSchema = new Schema({
  gender: String,
  heightType: String,
  weightType: String,
  height: String,
  weight: String,
  name: String,
  phone: String,
  email: String,
});
const MacroCalculator =
  models.MacroCalculator || model('MacroCalculator', macroCalculatorSchema);

// Enroll Link
const enrollLinkSchema = new Schema({ url: String });
const EnrollLink = models.EnrollLink || model('EnrollLink', enrollLinkSchema);

// App Link
const appLinkSchema = new Schema({ url: String });
const AppLink = models.AppLink || model('AppLink', appLinkSchema);

// **Membership Link**: monthly & annual URLs
const membershipLinkSchema = new Schema({
  monthly: String,
  annual: String,
});
const MembershipLink =
  models.MembershipLink || model('MembershipLink', membershipLinkSchema);

// **Training Program**: array of 6 URLs
const trainingProgramSchema = new Schema({
  training_link_1: { type: String, required: true },
  training_link_2: { type: String, required: true },
  training_link_3: { type: String, required: true },
  training_link_4: { type: String, required: true },
  training_link_5: { type: String, required: true },
  training_link_6: { type: String, required: true },
});
const TrainingProgram =
  models.TrainingProgram || model('TrainingProgram', trainingProgramSchema);

/**
 * Extract endpoint from URL → e.g. "contactus", "membership-link", "training-program", etc.
 */
function getEndpoint(url: string): string {
  const parts = new URL(url).pathname.split('/').filter(Boolean);
  return parts.slice(1).join('/');
}

export async function GET(request: Request) {
  const endpoint = getEndpoint(request.url);

  if (endpoint === 'admin/validate') {
    return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
  }

  try {
    if (endpoint === 'contactus') {
      const contacts = await ContactUs.find({});
      return NextResponse.json(contacts);
    } else if (endpoint === 'macro_calculator') {
      const macros = await MacroCalculator.find({});
      return NextResponse.json(macros);
    } else if (endpoint === 'enroll-link') {
      const enrollLinks = await EnrollLink.find({});
      return NextResponse.json(enrollLinks);
    } else if (endpoint === 'app-link') {
      const appLinks = await AppLink.find({});
      return NextResponse.json(appLinks);
    } else if (endpoint === 'membership-link') {
      // grab the one-and-only document
      const doc = await MembershipLink.findOne({});
      // wrap in array for compatibility with your client
      return NextResponse.json(doc ? [doc] : []);
    } else if (endpoint === 'training-program') {
      const programs = await TrainingProgram.find({});
      return NextResponse.json(programs);
    } else {
      return NextResponse.json({ error: 'Endpoint not found' }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json(
      { error: 'Database error', details: String(error) },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  const endpoint = getEndpoint(request.url);
  const body = await request.json();

  try {
    if (endpoint === 'admin/validate') {
      const adminPassword =
        process.env.ADMIN_PASSWORD ||
        'Asqp>#WQcj:G^fXUpAP$vkp5gEc0VxhvgJuB.d4$#F2Ue5sg+:3UtqV%+rxX4Axd';
      if (body.password === adminPassword) {
        return NextResponse.json({ success: true });
      } else {
        return NextResponse.json(
          { success: false, error: 'Invalid password' },
          { status: 401 }
        );
      }
    }

    // Existing endpoints...
    if (endpoint === 'contactus') {
      const newContact = await ContactUs.create(body);
      return NextResponse.json(
        { message: 'Contact info saved', data: newContact },
        { status: 201 }
      );
    } else if (endpoint === 'macro_calculator') {
      const newMacro = await MacroCalculator.create(body);
      return NextResponse.json(
        { message: 'Macro Calculator info saved', data: newMacro },
        { status: 201 }
      );
    } else if (endpoint === 'enroll-link') {
      const newEnroll = await EnrollLink.create(body);
      return NextResponse.json(
        { message: 'Enroll link saved', data: newEnroll },
        { status: 201 }
      );
    } else if (endpoint === 'app-link') {
      const newApp = await AppLink.create(body);
      return NextResponse.json(
        { message: 'App link saved', data: newApp },
        { status: 201 }
      );
    }

    else if (endpoint === 'membership-link') {
      // body: { monthly: "...", annual: "..." }
      const updated = await MembershipLink.findOneAndUpdate(
        {},             // no filter → match the one-and-only doc
        {               // set these fields
          monthly: body.monthly,
          annual: body.annual,
        },
        {
          new: true,    // return the updated doc
          upsert: true, // create if it doesn't exist
        }
      );
      return NextResponse.json(
        { message: 'Membership links saved', data: updated },
        { status: 201 }
      );
    }

    // **New: Training Program**
    else if (endpoint === 'training-program') {
      // body should be { links: [url1, url2, …, url6] }
      const newProgram = await TrainingProgram.create(body);
      return NextResponse.json(
        { message: 'Training program links saved', data: newProgram },
        { status: 201 }
      );
    }

    // No match
    return NextResponse.json({ error: 'Endpoint not found' }, { status: 404 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Database error', details: String(error) },
      { status: 500 }
    );
  }
}
