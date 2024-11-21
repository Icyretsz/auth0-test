
import { initializeAuth0 } from '../../../lib/auth0';
import {NextRequest, NextResponse} from "next/server";

export const GET = (req: NextRequest, res: NextResponse) => {
    const auth0 = initializeAuth0(req);
    return auth0.handleAuth()(req, res);
}