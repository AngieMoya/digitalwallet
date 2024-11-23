import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const {
    cookies,
    nextUrl: { pathname },
  } = request;
  const userId = cookies.get('userId')?.value;

  console.log('userId', userId);
  console.log('URL', pathname);

  const unprotectedRoutes = ['/', '/sign-up'];

  if (!unprotectedRoutes.includes(pathname) && !userId) {
    return NextResponse.redirect(new URL('/', request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next|static|favicon.ico|api|images).*)', // Exclude _next, static, API, and other resources
  ],
};
