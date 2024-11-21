// src/lib/auth0.ts
import {initAuth0} from '@auth0/nextjs-auth0';
import {NextRequest} from "next/server";


export const initializeAuth0 = (req: NextRequest): ReturnType<typeof initAuth0> => {

        return initAuth0({
            baseURL: `http://${req.headers.get('host')}`,
            secret: process.env.AUTH0_SECRET,
            issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
            clientID: process.env.AUTH0_CLIENT_ID,
            clientSecret: process.env.AUTH0_CLIENT_SECRET,
            session: {
                cookie: {
                    domain: `.${req.headers.get('host')?.split(':')[0].split('.')[1]}`,
                },
            },
        })
    }
;