import { NextRequest, NextResponse } from 'next/server';


export default function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const hostHeader = req.headers.get('host');
  const hostname = hostHeader?.split(':')[0];
  const orgName = hostname?.split('.')[0];

  console.log("URL: ", hostHeader)
  console.log("pathname: ", pathname)
  console.log("orgName: ", orgName)

  if (hostHeader === 'localhost:3002') {
    return NextResponse.next();
  } else if (pathname === '/' && orgName !== '') {

    const auth0Url = new URL(`${process.env.AUTH0_ISSUER_BASE_URL}/authorize`);
    auth0Url.searchParams.append('client_id', `${process.env.AUTH0_CLIENT_ID}`);
    auth0Url.searchParams.append('response_type', 'code');
    auth0Url.searchParams.append('redirect_uri', `https://localhost:3002/${orgName}`);
    auth0Url.searchParams.append('scope', 'openid profile email');
    auth0Url.searchParams.append('organization', `${orgName}`);

    console.log("auth url: ", auth0Url.toString());

    return NextResponse.redirect(auth0Url.toString());
  }

  return NextResponse.next();
}

