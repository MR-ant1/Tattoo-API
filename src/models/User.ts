import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Role } from "./Role"
import { Appointment } from "./Appointment"

@Entity('users')
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number

    @Column({ name: "first_name" })
    firstName!: string

    @Column({ name: "last_name" })
    lastName!: string

    @Column({ name: "email" })
    email!: string

    @Column({ name: "password_hash" })
    password!: string

    @ManyToOne(() => Role, (roles) => roles.users)
    @JoinColumn({ name: 'role_id' })
    roles!: Role

    @OneToMany(() => Appointment, (appointments) => appointments.users)
    appointments!: Appointment
}
