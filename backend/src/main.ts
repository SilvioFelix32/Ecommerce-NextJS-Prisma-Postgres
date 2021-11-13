import { PrismaClient } from '@prisma/client';
import { User } from '@prisma/client';

const prisma = new PrismaClient({})

// A main function so that you can use async/await
async function main() {
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
}

main()
    .catch((e) => {
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect()
    })

    //!  put a dollar-sign between "." and "disconnect"