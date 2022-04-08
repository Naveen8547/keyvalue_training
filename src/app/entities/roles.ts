import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { type } from "../config/rdbms";
import { AbstractEntity } from "./AbstractEntity";
import { Employee } from "./Employee";

@Entity("roles")
export class roles extends AbstractEntity{
    @PrimaryGeneratedColumn("uuid")
    public role_id: string;

    @Column({nullable: true})
    public role_name:string;

    @OneToMany((type) => Employee, (employee) => employee.department)
    @JoinColumn()
    public employee: Employee[];

}