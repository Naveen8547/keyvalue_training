import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { AbstractEntity } from "./AbstractEntity";

@Entity("projects")
export class projects extends AbstractEntity{
    @PrimaryGeneratedColumn("uuid")
    public pro_id: string;

    @Column({nullable: false})
    public pro_name: string;

    @Column({nullable: false})
    public status: string;

    @Column()
    public desc: string;
}
