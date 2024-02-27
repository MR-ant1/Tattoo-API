import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('services')
export class Service extends BaseEntity{
@PrimaryGeneratedColumn()
id!: number
@Column()
serviceName!: string
@Column()
description!: string
}
