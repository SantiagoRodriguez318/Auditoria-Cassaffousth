import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToOne, PrimaryColumn } from "typeorm";
import { Usuario } from "./Usuario";
import { TiposPlanes } from "../TPlanes";

@Entity()
export class Planes {
    
    @PrimaryColumn()
    id: number;
    
    @Column({ type: "enum", enum: TiposPlanes, default:TiposPlanes.PLAN1,  })
    Plan:string;
    
    @Column({ type: "text", nullable: false })
    descripción: string;

    @Column({ type:"int", nullable: false })
    precio: number;

    @Column({ default:false })
    active: boolean;

    @ManyToOne(() => Usuario, usuario => usuario.planes)
    usuario: Usuario;
}
