import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Service } from "./Service"
import { User } from "./User"

@Entity('appointments')
export class Appointment extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    appointmentDate!: Date

    @ManyToOne(() => Service, (services) => services.appointments)
    @JoinColumn({ name: 'service_id' })
    services!: Service

    @ManyToOne(() => User, (users) => users.appointments)
    @JoinColumn({ name: 'user_id' })
    users!: User
}
