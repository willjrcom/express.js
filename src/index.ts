import express, { Request, Response } from 'express';
import userRouter from './routers/user/userRouter';

const app = express();
const PORT = 3000;

// Rota básica
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, Express with TypeScript1!');
});

app.use("/users", userRouter)

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
