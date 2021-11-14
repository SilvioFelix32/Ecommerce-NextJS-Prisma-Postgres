// backend/src/index.tsimport { PrismaClient } from '@prisma/client'
import { PrismaClient } from '@prisma/client'
import express from 'express'

const prisma = new PrismaClient()
const app = express()
app.use(express.json())

//* 3. Creates a new User.
app.post(`/user`, async (req, res) => {
  const newUser = await prisma.user.create({
    data: { ...req.body },
  })
  res.json({
    success: true,
    payload: newUser,
    message: "Usuário Criado com Sucesso!",
  })
})

//* 7. Fetches all Users.
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

//* 6. Deletes a user by its ID.
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