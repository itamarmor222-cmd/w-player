import { NextRequest, NextResponse } from 'next/server';

export const config = {
  // Apply middleware to all routes except api, static files, and images
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|logo.jpg|logo.png).*)'],
};

export function middleware(req: NextRequest) {
  const basicAuth = req.headers.get('authorization');

  if (basicAuth) {
    const authValue = basicAuth.split(' ')[1];
    const [user, pwd] = atob(authValue).split(':');

    // Username: wplayer | Password: 1234
    if (user === 'wplayer' && pwd === '1234') {
      return NextResponse.next();
    }
  }

  return new NextResponse('Authentication required to view this site.', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Secure Area"',
    },
  });
}
