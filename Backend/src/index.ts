import "reflect-metadata";
import app from './app';
import { AppDataSource } from './DbConfig';

async function initialize () {
    try {

        await AppDataSource.initialize();
        console.log("Base de datos conectada");
        app.listen(3000);
        console.log('Server is running on port', 3000);
    }
    catch (error) {
        console.error(error)
    }
}
initialize();