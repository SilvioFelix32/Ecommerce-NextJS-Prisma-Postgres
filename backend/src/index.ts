// backend/src/index.ts
import { PrismaClient } from '@prisma/client'
import express, { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken'
import decode from 'jwt-decode'
import { auth } from './config';

import { generateJwtAndRefreshToken } from './auth';
import { checkRefreshTokenIsValid, users, main, invalidateRefreshToken } from './main';


import { CreateSessionDTO, DecodedToken } from './types';

const prisma = new PrismaClient();
const app = express();
app.use(express.json());

main();

function checkAuthMiddleware(request: Request, response: Response, next: NextFunction) {
  const { authorization } = request.headers;

  if (!authorization) {
    return response
      .status(401)
      .json({ error: true, code: 'token.invalid', message: 'Token not present.' })
  }

  const [, token] = authorization?.split(' ');

  if (!token) {
    return response
      .status(401)
      .json({ error: true, code: 'token.invalid', message: 'Token not present.' })
  }

  try {
    const decoded = jwt.verify(token as string, auth.secret) as DecodedToken;

    request.user = decoded.sub;

    return next();
  } catch (err) {

    return response
      .status(401)
      .json({ error: true, code: 'token.expired', message: 'Token invalid.' })
  }
}

function addUserInformationToRequest(request: Request, response: Response, next: NextFunction) {
  const { authorization } = request.headers;

  if (!authorization) {
    return response
      .status(401)
      .json({ error: true, code: 'token.invalid', message: 'Token not present.' })
  }

  const [, token] = authorization?.split(' ');

  if (!token) {
    return response
      .status(401)
      .json({ error: true, code: 'token.invalid', message: 'Token not present.' })
  }

  try {
    const decoded = decode(token as string) as DecodedToken;

    request.user = decoded.sub;

    return next();
  } catch (err) {
    return response
      .status(401)
      .json({ error: true, code: 'token.invalid', message: 'Invalid token format.' })
  }
}
// Creates a new User.
app.post(`/session`, async (req, res) => {
  const newUser = await prisma.user.create({
    data: { ...req.body },
  })
  res.json({
    success: true,
    payload: newUser,
    message: "Usuário Criado com Sucesso!",
  })
})

// Fetches all Users.
app.get('/user', async (req, res) => {
  const users = await prisma.user.findMany()
  res.json({
    success: true,
    payload: users,
    message: "Seja Bem Vindo!",
  })
})

app.use((req, res, next) => {
  res.status(404);
  return res.json({
    success: false,
    payload: null,
    message: `API SAYS: Endpoint not found for path: ${req.path}`,
  });
});

app.listen(3003, () =>
  console.log('REST API server ready at: http://localhost:3003'),
)

// Deletes a user by its ID.
app.delete(`/user:id`, async (req, res) => {
  const { id } = req.params
  const deleteUser = await prisma.user.delete({
    where: { id: Number(id) },
  })
  res.json({
    success: true,
    payload: deleteUser,
  })
})