import * as admin from 'firebase-admin';
import { Request, Response, NextFunction } from 'express';

// https://fireship.io/snippets/express-middleware-auth-token-firebase/
export async function decodeToken(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  if (req.headers.authorization?.startsWith('Bearer ')) {
    const idToken = req.headers.authorization?.split('Bearer ')[1];

    try {
      const decodedToken = await admin.auth().verifyIdToken(idToken);
      req['currentUser'] = decodedToken;
    } catch (err) {
      console.error(err);
    }
  }

  next();
}
