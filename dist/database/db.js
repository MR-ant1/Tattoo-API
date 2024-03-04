"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
require("dotenv/config");
const typeorm_1 = require("typeorm");
const _1708976565121_roles_1 = require("./migrations/1708976565121-roles");
const _1708977244413_users_1 = require("./migrations/1708977244413-users");
const _1708980299717_services_1 = require("./migrations/1708980299717-services");
const _1708980851262_appointments_1 = require("./migrations/1708980851262-appointments");
const Role_1 = require("../models/Role");
const User_1 = require("../models/User");
const Service_1 = require("../models/Service");
const Appointment_1 = require("../models/Appointment");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 3306,
    username: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_DATABASE || "test",
    entities: [Role_1.Role, User_1.User, Service_1.Service, Appointment_1.Appointment],
    migrations: [_1708976565121_roles_1.Roles1708976565121, _1708977244413_users_1.Users1708977244413, _1708980299717_services_1.Services1708980299717, _1708980851262_appointments_1.Appointments1708980851262],
    synchronize: false,
    logging: false,
});
