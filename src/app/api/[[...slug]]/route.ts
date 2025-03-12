// /app/api/[[...slug]]/route.ts
import { NextResponse } from 'next/server';
import mongoose, { Schema, model, models } from 'mongoose';

/* 
  1) Connect to MongoDB (only once).
     In production, store the connection string in an environment variable, e.g. process.env.MONGODB_URI
*/
const MONGODB_URI =
  'mongodb+srv://isitakar123:AJdEj2y3YjUbPcVb@yukin.2nsht.mongodb.net/hybridlabs?retryWrites=true&w=majority&appName=yukin';

if (!mongoose.connection.readyState) {
  mongoose.connect(MONGODB_URI).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });
}

/* 
  2) Define Mongoose Schemas and Models.
     We use `models[...] || model(...)` to avoid "Cannot overwrite model" errors in Next.js dev mode.
*/

// Contact Us Schema
const contactSchema = new Schema({
  firstName: String,
  lastName: String,
  phone: String,
  email: String,
  message: String,
});
const ContactUs = models.ContactUs || model('ContactUs', contactSchema);

// Macro Calculator Schema
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

// Enroll Link Schema
const enrollLinkSchema = new Schema({
  url: String,
});
const EnrollLink = models.EnrollLink || model('EnrollLink', enrollLinkSchema);

// App Link Schema
const appLinkSchema = new Schema({
  url: String,
});
const AppLink = models.AppLink || model('AppLink', appLinkSchema);

/**
 * Helper Function: Extract Endpoint from the request URL
 */
function getEndpoint(url: string): string {
  // Split the URL into parts and remove empty strings
  const parts = new URL(url).pathname.split('/').filter(Boolean);
  // Remove the first part ("api") and join the rest → e.g. "contactus", "macro_calculator", etc.
  return parts.slice(1).join('/');
}

/**
 * GET Request Handler
 * Returns stored data based on the endpoint.
 */
export async function GET(request: Request) {
  const endpoint = getEndpoint(request.url);

  // For security, disallow GET on the admin validation endpoint.
  if (endpoint === 'admin/validate') {
    return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
  }

  try {
    if (endpoint === 'contactus') {
      // Fetch all contacts
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
    } else {
      return NextResponse.json({ error: 'Endpoint not found' }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json({ error: 'Database error', details: String(error) }, { status: 500 });
  }
}

/**
 * POST Request Handler
 * Processes incoming data based on the endpoint.
 */
export async function POST(request: Request) {
  const endpoint = getEndpoint(request.url);
  const body = await request.json();

  try {
    // === Admin Validation Endpoint ===
    if (endpoint === 'admin/validate') {
      // Retrieve static admin password from environment or .env
      // For demonstration, it's hard-coded:
      const adminPassword = 'Asqp>#WQcj:G^fXUpAP$vkp5gEc0VxhvgJuB.d4$#F2Ue5sg+:3UtqV%+rxX4Axd'; // use process.env.ADMIN_PASSWORD in real projects

      // Compare the submitted password with the static password.
      if (body.password === adminPassword) {
        return NextResponse.json({ success: true });
      } else {
        return NextResponse.json(
          { success: false, error: 'Invalid password' },
          { status: 401 }
        );
      }
    }

    // === Contact US Endpoint ===
    if (endpoint === 'contactus') {
      const newContact = await ContactUs.create(body);
      return NextResponse.json(
        { message: 'Contact info saved', data: newContact },
        { status: 201 }
      );
    }

    // === Macro Calculator Endpoint ===
    if (endpoint === 'macro_calculator') {
      const newMacro = await MacroCalculator.create(body);
      return NextResponse.json(
        { message: 'Macro Calculator info saved', data: newMacro },
        { status: 201 }
      );
    }

    // === Enroll Link Endpoint ===
    if (endpoint === 'enroll-link') {
      const newEnrollLink = await EnrollLink.create(body);
      return NextResponse.json(
        { message: 'Enroll link saved', data: newEnrollLink },
        { status: 201 }
      );
    }

    // === App Link Endpoint ===
    if (endpoint === 'app-link') {
      const newAppLink = await AppLink.create(body);
      return NextResponse.json(
        { message: 'App link saved', data: newAppLink },
        { status: 201 }
      );
    }

    // === No matching endpoint ===
    return NextResponse.json({ error: 'Endpoint not found' }, { status: 404 });
  } catch (error) {
    return NextResponse.json({ error: 'Database error', details: String(error) }, { status: 500 });
  }
}
