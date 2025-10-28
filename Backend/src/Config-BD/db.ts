import {DataSource} from 'typeorm'

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'san0906',
    port: 5432,
    database: 'AresCodeBD',
    entities: ["src/entities/*.ts"],
    migrations: ["src/migrations/*.ts"],
    logging: false,
    synchronize: true,
    dropSchema: true,
});
