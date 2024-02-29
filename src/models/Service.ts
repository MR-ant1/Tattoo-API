import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Appointment } from "./Appointment"

@Entity('services')
export class Service extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number

    @Column({name: "service_name"})
    serviceName!: string //!!!!!!!!!!! PERO BUAAAT

    @Column({name: "description"})
    description!: string

    @OneToMany(() => Appointment, (appointments) => appointments.services)
    appointments!: Appointment
}
