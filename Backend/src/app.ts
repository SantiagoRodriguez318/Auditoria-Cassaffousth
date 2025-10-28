<<<<<<< HEAD
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import userRoutes from './routes/user.routes'
import authRoutes from './routes/auth.routes'

const app = express()

app.use(morgan ('dev'))
app.use(cors ());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(userRoutes);
app.use(authRoutes);

export default app;


=======
import express, { Request, Response } from 'express'
import morgan from 'morgan'
import cors from 'cors'
import dotenv from 'dotenv'
import userRoutes from './routes/user.routes'

const app = express()
>>>>>>> 9d74377cb464c7b807eadb329256f629e2bcae65

app.use(morgan ('dev'))

<<<<<<< HEAD

=======
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
>>>>>>> 9d74377cb464c7b807eadb329256f629e2bcae65
