import { Request, Response, NextFunction } from 'express';
import httpError from 'http-errors';
import { DecodedIdToken } from 'firebase-admin/lib/auth/token-verifier';

export function isAdmin(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const user = req['currentUser'] as DecodedIdToken;
  if (!user) throw httpError(401, 'Not Authenticated');
  // todo: check custom claims; !user.isAdmin throw 403
}
