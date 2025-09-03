import {Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import { Planes } from "./Planes";

@Entity()
export class Usuario {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    Nombre: string;

    @Column()
    Apellido: string;

    @Column()
    Email: string;

    @Column()
    Contraseña: string;

    @Column({ default: false})
    active: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;    
    
    @OneToMany(() => Planes, plan => plan.usuario)
    planes: Planes[];

}