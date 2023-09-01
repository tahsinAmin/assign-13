// WORKING WITH REQUEST HEADER
// In the headers, add 'api-key' and put some value
// Make sure no data is present in the body to work correctly.

import { NextResponse } from "next/server";
import { headers } from "next/headers";

// GET Cookie
export async function GET(req, res) {
  const headerList = headers();
  const authorizationHeader = headerList.get("Authorization");

  console.log(authorizationHeader);

  return NextResponse.json({
    key: "Authorization",
    value: authorizationHeader,
  });
}
