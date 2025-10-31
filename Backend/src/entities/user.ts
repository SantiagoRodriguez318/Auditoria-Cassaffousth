import { 
    Column, 
    Entity, 
    CreateDateColumn,
    UpdateDateColumn,
    BaseEntity,
    PrimaryGeneratedColumn,
    } from "typeorm";

    import { IsNumber, IsString, MaxLength} from 'class-validator';


@Entity('user')

export class User extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false})
    Nombre: string;
    
    @Column({nullable: false})
    Apellido: string;
    
    @Column({unique: true, nullable: true})
    @IsString()
    @MaxLength(100, { message: 'El email no puede exceder los 100 caracteres.' })
    Email: string;

    @Column({nullable: false})
    @IsString()
    Contraseña: string;

    @Column({default:false})
    isVerified: boolean;
    
    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @Column({default:'Usuario'})
    Rol: string;

}   
