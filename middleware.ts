// import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
// import { NextRequest, NextResponse } from "next/server";

// export async function middleware(req: NextRequest) {
//   const res = NextResponse.next();
//   const supabase = createMiddlewareClient({ req, res });

//   const {
//     data: { session },
//   } = await supabase.auth.getSession();

//   const { pathname } = req.nextUrl;

//   const authOnlyPaths = ["/login", "/register", "/verify"];

//   const publicPaths = [
//     "/",
//     ...authOnlyPaths,
//     "/onboarding",
//     "/reset-password",
//     "/update-password",
//     "/auth/callback",
//   ];

//   const isPublicPath = publicPaths.some(
//     (path) =>
//       pathname === path ||
//       pathname.startsWith(`${path}?`) ||
//       pathname.startsWith(`${path}#`)
//   );

//   const isAuthOnlyPath = authOnlyPaths.some(
//     (path) =>
//       pathname === path ||
//       pathname.startsWith(`${path}?`) ||
//       pathname.startsWith(`${path}#`)
//   );

//   if (session && isAuthOnlyPath) {
//     return NextResponse.redirect(new URL("/dashboard", req.url));
//   }

//   if (!session && !isPublicPath) {
//     return NextResponse.redirect(new URL("/login", req.url));
//   }

//   return res;
// }

// export const config = {
//   matcher: [
//     "/((?!api|_next/static|_next/image|favicon.ico|.*\\.png$|.*\\.jpg$|.*\\.ico$).*)",
//   ],
// };

// import { type NextRequest, NextResponse } from "next/server";
// import { updateSession } from "./lib/supabase/middleware";

// export async function middleware(request: NextRequest) {
//   const publicRoutes = [
//     "/login",
//     "/register",
//     "/reset-password",
//     "/auth",
//     "/",
//     "/update-password",
//     "/verify",
//   ];

//   const { pathname } = request.nextUrl;

//   const isPublicRoute = publicRoutes.some(
//     (route) => pathname === route || pathname.startsWith(`${route}/`)
//   );

//   if (isPublicRoute) {
//     return NextResponse.next();
//   }

//   return await updateSession(request);
// }

import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

const protectedRoutes = ["/dashboard"];

export async function middleware(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );
          supabaseResponse = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const pathname = request.nextUrl.pathname;

  if (!user && protectedRoutes.includes(pathname)) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  // const pathname = request.nextUrl.pathname;

  // const isProtectedRoute = protectedRoutes.includes(pathname);

  // const session = await supabase.auth.getUser();

  // if (isProtectedRoute && session.error) {
  //   return NextResponse.redirect(new URL("/", request.url));
  // }
  return supabaseResponse;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
