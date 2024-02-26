import "reflect-metadata";
import 'dotenv/config';
import { DataSource } from "typeorm";
import { Roles1708976565121 } from "./migrations/1708976565121-roles";
import { Users1708977244413 } from "./migrations/1708977244413-users";
import { Services1708981299717 } from "./migrations/1708981299717-services";
import { Appointments1708980851262 } from "./migrations/1708980851262-appointments";





export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 3306,
    username: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_DATABASE || "test",
    entities: [],
    migrations: [Roles1708976565121, Users1708977244413, Services1708981299717, Appointments1708980851262],
    synchronize: false,
    logging: false,
})