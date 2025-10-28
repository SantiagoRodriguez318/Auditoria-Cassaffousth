import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import userRoutes from './routes/user.routes'
import authRoutes from './routes/auth.routes'

const app = express()

app.use(morgan ('dev'))
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/prueba', (_req, res) => {
    res.json({ mensaje: '¡Backend funcionando correctamente!' });
});
app.use(userRoutes);
app.use(authRoutes);

export default app;

app.use(morgan ('dev'))

