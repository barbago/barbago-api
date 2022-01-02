import { Request, Response, Router } from 'express';
import { auth } from 'firebase-admin';
import { DecodedIdToken } from 'firebase-admin/lib/auth/token-verifier';

import { isAuthenticated } from '../../middlewares/isAuthenticated';

export const authRouter = Router();

authRouter.use(isAuthenticated);

/**
 * @api {post} /auth Login
 *
 * @apiGroup Auth
 * @apiName Login
 * @apiVersion 1.0.0
 */
authRouter.post('/login', (req: Request, res: Response) => {
  const user = req['currentUser'] as DecodedIdToken;
  auth()
    .createCustomToken(user.uid, { admin: true })
    .then((token) => res.send(token));
});

// https://firebase.google.com/docs/auth/admin/manage-cookies
authRouter.post('/logout', (req, res) => {
  res.clearCookie('session');
  res.redirect('/login');
});

