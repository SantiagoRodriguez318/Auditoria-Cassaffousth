import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import userRoutes from './routes/user.routes'
import authRoutes from './routes/auth.routes'
import path from 'path'

const app = express()

app.use(morgan ('dev'))
app.use(cors());
app.use(express.json());

console.log("Static path:", path.join(__dirname, "../public"));
app.use(express.static(path.join(__dirname, "../public")));

app.use(express.urlencoded({ extended: false }));

app.use(userRoutes);
app.use(authRoutes);

export default app;
console.log("Static path:", path.join(__dirname, "../public"));
app.use(morgan ('dev'))

