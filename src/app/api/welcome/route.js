// WORKING WITH REQUEST HEADER
// In the headers, add 'api-key' and put some value
// Make sure no data is present in the body to work correctly.

import { NextResponse } from "next/server";

// GET Cookie
export async function GET(req, res) {
  return NextResponse.json({
    message: "Welcome to our API!",
    version: "1.0",
  });
}
