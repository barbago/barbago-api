import { NextFunction, Request, Response } from 'express';
import { DecodedIdToken } from 'firebase-admin/lib/auth/token-verifier';
import httpError from 'http-errors';

// Todo: this is useless! check solutions below
export function checkAuthorization(condition: boolean) {
  return (req: Request, res: Response, next: NextFunction) => {
    const user = req['currentUser'] as DecodedIdToken;
    console.log(user.exp);
    if (condition) next();
    else throw httpError(403, 'Unauthorized');
  };
}

// Try to do something of role based access control
// Roles: barber, client, admin, manager, etc


/*
// https://gist.github.com/joshnuss/37ebaf958fe65a18d4ff#file-authorization-js
// middleware for doing role-based permissions
export default function permit(...permittedRoles) {
  // return a middleware
  return (request, response, next) => {
    const { user } = request

    if (user && permittedRoles.includes(user.role)) {
      next(); // role is allowed, so continue on the next middleware
    } else {
      response.status(403).json({message: "Forbidden"}); // user is forbidden
    }
  }
}
*/
