// WORKING WITH REQUEST HEADER
// In the headers, add 'api-key' and put some value
// Make sure no data is present in the body to work correctly.

import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { headers } from "next/headers";

// GET Cookie
export async function GET(req, res) {
  let token = req.cookies.get("theme")["value"]; // To get value only
  // let token = req.cookies.get("theme"); // To get value only
  console.log(token, "Hello");
  return NextResponse.json({ msg: token });
}