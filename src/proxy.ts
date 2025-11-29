
// import { getToken } from "next-auth/jwt";
// import { NextResponse, NextRequest } from "next/server";

import { NextRequest, NextResponse } from "next/server";

// export async function proxy(req: NextRequest) {
//   const { pathname } = req.nextUrl;
//   const publicRoutes = [
//     "/login",
//     "/register",
//     "/api/auth",
//   ];
//   if (publicRoutes.some((path) => pathname.startsWith(path))) {
//     return NextResponse.next();
//   }
//   const token = await getToken({ req, secret: process.env.AUTH_SECRET });
//   if (!token) {
//     const loginUrl = new URL("/login", req.url);
//     loginUrl.searchParams.set("callbackUrl", req.url);
//     return NextResponse.redirect(loginUrl);
//   }

//   const role = token.role;
  

//   // ✅ Role-based protection
//   if (pathname.startsWith("/admin") && role !== "admin") {
//     return NextResponse.redirect(new URL("/unauthorized", req.url));
//   }

//   if (pathname.startsWith("/user") && role !== "user") {
//     return NextResponse.redirect(new URL("/unauthorized", req.url));
//   }

//   if (pathname.startsWith("/delivery") && role !== "deliveryBoy") {
//     return NextResponse.redirect(new URL("/unauthorized", req.url));
//   }
//   return NextResponse.next()
// }
// export const config = {
//       matcher: [
//         '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|gif|webp|svg|css|js)$).*)',
//       ],
//     };

// // req ----- middleware ----- server
// // auth login ,register  access
// // home authentication user
export async function proxy(req : NextRequest) {
  return NextResponse.next()
}