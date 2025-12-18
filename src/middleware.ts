import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const publicRoutes = ['/login', '/signup', '/forgot-password', '/reset-password'];

export function middleware(request: NextRequest) {
  const isAuthenticated = request.cookies.get('isAuthenticated')?.value === 'true';
  const pathname = request.nextUrl.pathname;

  // Check if it's an admin route
  if (pathname.startsWith('/admin')) {
    // If not authenticated, redirect to login
    if (!isAuthenticated) {
      // Fallback: check localStorage (for client-side auth verification)
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  // If authenticated user tries to access auth pages, redirect to dashboard
  if (publicRoutes.some(route => pathname.startsWith(route)) && isAuthenticated) {
    return NextResponse.redirect(new URL('/admin/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match admin routes and auth routes
    '/admin/:path*',
    '/login',
    '/signup',
    '/forgot-password',
    '/reset-password',
  ],
};
