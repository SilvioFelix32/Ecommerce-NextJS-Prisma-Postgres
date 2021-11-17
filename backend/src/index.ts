// backend/src/index.tsimport { PrismaClient } from '@prisma/client'
import { PrismaClient } from '@prisma/client'
import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken'
import decode from 'jwt-decode'
import { generateJwtAndRefreshToken } from './auth';
import { auth } from './config';

import { checkRefreshTokenIsValid, users, invalidateRefreshToken } from './main';
import { CreateSessionDTO, DecodedToken } from './types';

const prisma = new PrismaClient()
const app = express()
app.use(express.json())
app.use(cors())


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

//Creates a new User.
app.post(`/user`, async (request: Request, response: Response) => {
  const newUser = await prisma.user.create({
    data: { ...request.body },
  })
  response.json(newUser)
})

//Fetches all Users.
app.get('/users', async (request: Request, response: Response) => {
  const users = await prisma.user.findMany()
  response.json(users)
})

//Delete User by id
app.delete(`/deleteUser/:id`, async (request: Request, response: Response) => {
  const { id } = request.params
  const deleteUser = await prisma.user.delete({
    where: { id: Number(id) },
  })
  response.json({ deleteUser })
})

//Session Login
app.post('/session', async (request: Request, response: Response) => {
  const { email, password } = request.body as CreateSessionDTO;

  const user = await prisma.user.findUnique({
    where: {
      email
    },
  })

  if (!user || password !== user.password) {
    return response
      .status(401)
      .json({
        error: true,
        message: 'E-mail or password incorrect.'
      });
  }

  const { token, refreshToken } = generateJwtAndRefreshToken(email, {
    roles: user.role,
  })

  return response.json({
    token,
    refreshToken,
    roles: user.role
  });
});

//If the session exprires refreshToken
app.post('/refresh', addUserInformationToRequest, async (request: Request, response: Response) => {
  const email = request.user;
  const { refreshToken } = request.body;

  const user = await prisma.user.findUnique({
    where: {
      email
    },
  })


  if (!user) {
    return response
      .status(401)
      .json({
        error: true,
        message: 'User not found.'
      });
  }

  if (!refreshToken) {
    return response
      .status(401)
      .json({ error: true, message: 'Refresh token is required.' });
  }

  const isValidRefreshToken = checkRefreshTokenIsValid(email, refreshToken)

  if (!isValidRefreshToken) {
    return response
      .status(401)
      .json({ error: true, message: 'Refresh token is invalid.' });
  }

  invalidateRefreshToken(email, refreshToken)

  const { token, refreshToken: newRefreshToken } = generateJwtAndRefreshToken(email, {
    roles: user.role
  })

  return response.json({
    token,
    refreshToken: newRefreshToken,
    roles: user.role
  });
});

//I can see my user datas
app.get('/me', checkAuthMiddleware, async (request: Request, response: Response) => {
  const email = request.user;

  const user = await prisma.user.findUnique({
    where: {
      email
    },
  })

  if (!user) {
    return response
      .status(400)
      .json({ error: true, message: 'User not found.' });
  }

  return response.json({
    email,
    roles: user.role
  })
});


app.listen(3003);
console.log('Started server on url: http://localhost:3003')