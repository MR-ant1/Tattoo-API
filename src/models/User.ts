import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Role } from "./Role"
import { Appointment } from "./Appointment"

@Entity('users')
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    firstName!: string
    @Column()
    lastName!: string
    @Column()
    email!: string
    @Column()
    password!: string

    @ManyToOne(() => Role, (roles) => roles.users)
    @JoinColumn({ name: 'role_id' })
    roles!: Role

    @OneToMany(() => Appointment, (appointments) => appointments.users)
    appointments!: Appointment
}
