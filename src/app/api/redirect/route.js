import { redirect } from 'next/navigation'

import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { headers } from "next/headers";

// GET Cookie
export async function GET(req, res) {
    console.log("I am here");
    return redirect('/about');
}
