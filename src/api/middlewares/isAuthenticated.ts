import { Request, Response, NextFunction } from 'express';
import { DecodedIdToken } from 'firebase-admin/lib/auth/token-verifier';
import httpError from 'http-errors';

// https://fireship.io/snippets/express-middleware-auth-token-firebase/
export function isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  if (req['currentUser'] as DecodedIdToken) next();
  else throw httpError(401, 'Not Authenticated');
}
