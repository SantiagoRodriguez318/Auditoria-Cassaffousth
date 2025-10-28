import "reflect-metadata"
import app from "./app"
import { seedUsers } from "./seed/Users-Seed"
import { AppDataSource } from "./Config-BD/db"

async function main(){
        try{
                await AppDataSource.initialize();
                await seedUsers();
                console.log('Base de datos conectada');
                app.listen(3000);
                console.log("Server is listening on port", 3000);
        } catch (error) {
                console.error(error)
        }
}

main()
