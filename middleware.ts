import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  if (!token) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
    userId: string;
  };

  const userId = decoded.userId;
  const newToken = jwt.sign({ userId: userId }, process.env.JWT_SECRET!, {
    expiresIn: "1d",
  });

  const response = NextResponse.next();
  response.cookies.set("token", newToken, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    name: "token",
    value: newToken,
    maxAge: 24 * 60 * 60,
    path: "/",
  });
  return response;
}

export const config = {
  matcher: ["/tasks", "/tasks/:path*", "/api/:path*"],
};
