import {DataSource} from 'typeorm'
import dotenv from 'dotenv';
dotenv.config();

export const AppDataSource = new DataSource({
    type: process.env.DB_TYPE as any,
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432,
    database: process.env.DB,
    entities: ["src/entities/*.ts"],
    logging: false,
    synchronize: true,
    dropSchema: false,
});
