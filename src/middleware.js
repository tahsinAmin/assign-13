import { NextResponse } from "next/server";

export function middleware(req, res) {
  const reqHeader = new Headers(req.headers);
  if (req.nextUrl.pathname.startsWith("/api/bearer")) {
    const authorizationHeader = reqHeader.get("Authorization");

    if (authorizationHeader === "123-ABC") {
      reqHeader.set("Authorization", "Bearer 123-ABC");

      return NextResponse.next({
        request: { headers: reqHeader },
      });
    } else {
      return NextResponse.json({ msg: "Request Fail" }, { status: 401 });
    }
  } else {
    reqHeader.set("Authorization", "123-ABC");

    return NextResponse.next();
  }
}
