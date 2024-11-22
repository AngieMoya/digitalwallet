import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const cookies = request.cookies;
  const userId = cookies.get('userId')?.value;

  console.log('userId', userId);
  console.log('URL', request.nextUrl.pathname);

  if (request.nextUrl.pathname !== '/' && !userId) {
    return NextResponse.redirect(new URL('/', request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next|static|favicon.ico|api|images).*)', // Exclude _next, static, API, and other resources
  ],
};
