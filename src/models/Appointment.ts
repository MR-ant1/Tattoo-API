import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('appointments')
export class Appointment extends BaseEntity{
@PrimaryGeneratedColumn()
id!: number
@Column()
appointmentDate!: string
}
