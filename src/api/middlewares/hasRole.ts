import { Request, Response, NextFunction } from 'express';
import httpError from 'http-errors';
import { auth } from 'firebase-admin';
import { DecodedIdToken } from 'firebase-admin/lib/auth/token-verifier';

export enum Role {
  ADMIN = 'ADMIN',
  BARBER = 'BARBER',
  CLIENT = 'CLIENT',
}

export function hasRole(role: Role) {
  return (req: Request, res: Response, next: NextFunction) => {
    const currentUser = req['currentUser'] as DecodedIdToken;
    if (!currentUser) throw httpError(401);
    auth()
      .getUser(currentUser.uid)
      .then((user) => {
        if (user?.customClaims?.roles?.includes(role)) {
          return next();
        }
        res.status(403).json({
          status: 403,
          message: 'Forbidden',
        });
      });
  };
}

export const isAdmin = hasRole(Role.ADMIN);

export const isBarber = hasRole(Role.BARBER);

export const isClient = hasRole(Role.CLIENT);

/*
Barbago is using Role Base Access Control by setting custom claims with Firebase.

https://firebase.google.com/docs/auth/admin/custom-claims

claims: {
  Roles: ['ADMIN', 'BARBER', 'CLIENT']
}

*/

// // Setting Custom Claims
// app.get('/', [decodeToken], (req, res) => {
//   const currentUser = req['currentUser'];
//   auth()
//     .setCustomUserClaims(currentUser.uid, {
//       roles: ['ADMIN'],
//     })
//     .then(() => res.send('suck seed'))
//     .catch(console.error);
// });
