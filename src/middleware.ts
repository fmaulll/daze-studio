import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Handle redirects for .html URLs
  if (pathname === '/privacy-policy.html') {
    return NextResponse.redirect(new URL('/privacy-policy', request.url))
  }

  if (pathname === '/terms-of-use.html') {
    return NextResponse.redirect(new URL('/terms-of-use', request.url))
  }

  return NextResponse.next()
}

// Configure which paths the middleware will run on
export const config = {
  matcher: ['/privacy-policy.html', '/terms-of-use.html']
} 