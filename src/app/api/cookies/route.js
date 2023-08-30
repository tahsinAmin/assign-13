// WORKING WITH REQUEST HEADER
// In the headers, add 'api-key' and put some value
// Make sure no data is present in the body to work correctly.

import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { headers } from "next/headers";

// GET
export async function GET(req, res) {
    console.log("This s console");
  // HOW TO GET HEADERS
  return NextResponse.json(
    {msg:"Hello World"},
    {
      status: 201,
      headers: { "Set-Cookie": `theme=dark;path=/;` },
    }
  );
}