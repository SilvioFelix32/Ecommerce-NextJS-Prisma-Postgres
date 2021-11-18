import { PrismaClient } from '@prisma/client';
import { RefreshTokensStore, UsersStore } from "./types";
import { v4 as uuid } from 'uuid';

export const users: UsersStore = new Map()
export const tokens: RefreshTokensStore = new Map()

const prisma = new PrismaClient({})

// A main function so that you can use async/await
/* export async function main() {
    // Create user
    const createUser = await prisma.user.create({
        data: {
            email: 'sftech@hotmail.com',
            password: '1234',
            role: 'ADMIN',
        },
        
    })
    console.log('Created new user: ', createUser)
    // Return Users

    const allUsers = await prisma.user.findUnique({
        where: {
            id: createUser.id,
        },
    })
    console.log(allUsers)
} */

export function createRefreshToken(email: string) {
    const currentUserTokens = tokens.get(email) ?? []
    const refreshToken = uuid()
  
    tokens.set(email, [...currentUserTokens, refreshToken])
  
    return refreshToken;
  }
  
  export function checkRefreshTokenIsValid(name: string, refreshToken: string) {
    const storedRefreshTokens = tokens.get(name) ?? []
  
    return storedRefreshTokens.some(token => token === refreshToken)
  }
  
  export function invalidateRefreshToken(name: string, refreshToken: string) {
    const storedRefreshTokens = tokens.get(name) ?? []
  
    tokens.set(name, storedRefreshTokens.filter(token => token !== refreshToken));
  }

/* main()
    .catch((e) => {
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect()
    }) */

    //!  put a dollar-sign between "." and "disconnect"