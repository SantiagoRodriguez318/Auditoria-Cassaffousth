import "reflect-metadata"
import app from "./app"
import { seedUsers } from "./seed/Users-Seed"
import { AppDataSource } from "./Config-BD/db"
import dotenv from 'dotenv';
dotenv.config();
const PORT = process.env.PORT;
async function main(){
        try{
                await AppDataSource.initialize();
                await seedUsers();
                console.log('Base de datos conectada');
                app.listen(PORT, () =>{;
                console.log("Server is listening on port", PORT);});
        } catch (error) {
                console.error(error)
        }
}

main()
