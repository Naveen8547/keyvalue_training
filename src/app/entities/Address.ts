import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { AbstractEntity } from "./AbstractEntity";
import { Employee } from "./Employee";
@Entity("address")
export class Address extends AbstractEntity {
    @PrimaryGeneratedColumn("uuid")
    public id: string;

    @Column({ nullable: false })
    public streetname: string;

    @Column({ nullable: false, unique: true })
    public district: string;

    @Column({ nullable: true })
    public state: string;

    @Column({ nullable: false })
    public pin: number;

   

}