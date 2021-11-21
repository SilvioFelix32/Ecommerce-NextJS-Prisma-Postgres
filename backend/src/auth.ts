import jwt from 'jsonwebtoken'

import { auth } from './config';
import { createRefreshToken } from './main';

export function generateJwtAndRefreshToken(email: string, payload: object = {}) {
  const token = jwt.sign(payload, auth.secret, {
    subject: email,
    expiresIn: 60 * 60 * 30, // 15 minutes 60 * 15
  });

  const refreshToken = createRefreshToken(email)

  return {
    token,
    refreshToken,
  }
}
