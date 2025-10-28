import { 
    Column, 
    Entity, 
    CreateDateColumn,
    UpdateDateColumn,
    BaseEntity,
    PrimaryGeneratedColumn,
    } from "typeorm";

<<<<<<< HEAD
    import { IsNumber, IsString, MaxLength} from 'class-validator';
    import { TipoDNI } from '../enum';


@Entity('user')

=======
@Entity('user')
>>>>>>> 9d74377cb464c7b807eadb329256f629e2bcae65
export class User extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({unique: true, nullable: false})
<<<<<<< HEAD
    @IsNumber()
    @MaxLength(10, { message: 'El DNI no puede exceder los 10 dígitos.' })
    Dni: number;

    @Column({type: 'enum', enum: TipoDNI, default: TipoDNI.DNI})  // Columna para el tipo de DNI
    TipoDNI: string;

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

    @Column({nullable: false, unique: true})
    @IsString()
    Telefono: string;

    @Column({default:false})
    isVerified: boolean;
    
=======
    Dni: number;

    @Column({nullable: false})
    firstname :string;
    
    @Column({nullable: false})
    lastname :string;
    
    @Column({unique: true, nullable: true})
    email :string;

    @Column({nullable: false})
    password :string;
    
    @Column({
        default:true
    })
    active :boolean;

>>>>>>> 9d74377cb464c7b807eadb329256f629e2bcae65
    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

<<<<<<< HEAD
    @Column({default:'Usuario'})
    Rol: string;

}   
=======

    @Column({
        default:false
    })
    isAdmin: boolean;

}   
>>>>>>> 9d74377cb464c7b807eadb329256f629e2bcae65
