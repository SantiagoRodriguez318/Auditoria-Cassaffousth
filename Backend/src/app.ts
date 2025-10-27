import express, { Request, Response } from 'express'
import morgan from 'morgan'
import cors from 'cors'
import dotenv from 'dotenv'
import userRoutes from './routes/user.routes'

const app = express()

app.use(morgan ('dev'))

app.use(cors ({
    origin:['http://localhost:3000']
})
);

app.use(express.json());
app.use(userRoutes);

const PORT=process.env.PORT || 8000;
const HOST=process.env.HOST;

app.listen(PORT, () => {
    console.log('el servidor esta en ejecución en http://${HOST}:${PORT}');
});

export default app 