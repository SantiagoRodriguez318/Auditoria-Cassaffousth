import { DataSource } from "typeorm";
import { Usuario } from './Entidades/Usuario'

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'san0906',
    database: 'AeroCodeBD',
    synchronize: true,
    logging: false,
    entities: [Usuario],
    dropSchema: true
});