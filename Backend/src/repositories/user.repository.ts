import { AppDataSource } from '../Config-BD/db';
import { User } from '../entities/user';


export const UserRepository = AppDataSource.getRepository(User).extend({
    
    async findById(id: number): Promise<User> {
        const user = await this.findOneBy({ id })
        if (!user) throw new Error("Usuario no encontrado.") 
        return user
    
    },


    async findAllUsers(): Promise<User[]> {
        const users = await this.find()
        if (!users) throw new Error("La lista de usuarios no fue encontrada.")
        return users
    },


    async createUser(data: Partial<User>): Promise<User> {
        const existing = await this.findOneBy({ Email: data.Email })
        if (existing) throw new Error("El email ya existe.") 

        const user = this.create(data)
        return await this.save(user)
    },


    async updateUser(id: number, data: Partial<User>): Promise<User> {
        const user = await this.findById(id)

        
        if (data.Email && data.Email !== user.Email) {
        
            const existing = await this.findOneBy({ Email: data.Email })
        if (existing && existing.id !== user.id) {
            throw new Error('El email ya existe.')
            }
        }

        const updated = Object.assign(user, data)
        return await this.save(updated)
    },


    async deleteUser(id: number): Promise<void> {
        const result = await this.delete(id)
        if (result.affected === 0) throw new Error("El usuario no fue encontrado, no se pudo eliminar.")
    },
    })
