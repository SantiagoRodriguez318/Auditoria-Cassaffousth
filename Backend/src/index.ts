import "reflect-metadata"
import app from "./app"
<<<<<<< HEAD
import { AppDataSource } from "./Config-BD/db"
=======
import { AppDataSource } from "./db"
>>>>>>> 9d74377cb464c7b807eadb329256f629e2bcae65

async function main(){
    try{
        await AppDataSource.initialize();
<<<<<<< HEAD
        console.log('Base de datos conectada');
=======
        console.log('Database connected')
>>>>>>> 9d74377cb464c7b807eadb329256f629e2bcae65
        app.listen(3000);
        console.log("Server is listening on port", 3000);
        } catch (error) {
            console.error(error)
        }
}

main()
