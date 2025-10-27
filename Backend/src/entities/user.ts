import { 
    Column, 
    Entity, 
    CreateDateColumn,
    UpdateDateColumn,
    BaseEntity,
    PrimaryGeneratedColumn,
    } from "typeorm";

@Entity('user')
export class User extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({unique: true, nullable: false})
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

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;


    @Column({
        default:false
    })
    isAdmin: boolean;

}   