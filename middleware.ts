import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const { pathname } = req.nextUrl;

  const authOnlyPaths = ["/login", "/register", "/verify"];

  const publicPaths = [
    "/",
    ...authOnlyPaths,
    "/onboarding",
    "/reset-password",
    "/update-password",
    "/auth/callback",
  ];

  const isPublicPath = publicPaths.some(
    (path) =>
      pathname === path ||
      pathname.startsWith(`${path}?`) ||
      pathname.startsWith(`${path}#`)
  );

  const isAuthOnlyPath = authOnlyPaths.some(
    (path) =>
      pathname === path ||
      pathname.startsWith(`${path}?`) ||
      pathname.startsWith(`${path}#`)
  );

  if (session && isAuthOnlyPath) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  if (!session && !isPublicPath) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return res;
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.png$|.*\\.jpg$|.*\\.ico$).*)",
  ],
};
