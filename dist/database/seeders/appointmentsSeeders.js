"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.appointmentsSeedDataBase = void 0;
const faker_1 = require("@faker-js/faker");
const Appointment_1 = require("../../models/Appointment");
const db_1 = require("../db");
const Service_1 = require("../../models/Service");
const User_1 = require("../../models/User");
const generateFakeAppointment = () => {
    const randomAppointment = new Appointment_1.Appointment();
    randomAppointment.appointmentDate = faker_1.faker.date.anytime();
    randomAppointment.user = new User_1.User();
    randomAppointment.user.id = faker_1.faker.number.int({ min: 1, max: 18 });
    randomAppointment.service = new Service_1.Service();
    randomAppointment.service.id = faker_1.faker.number.int({ min: 1, max: 5 });
    return randomAppointment;
};
const appointmentsSeedDataBase = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield db_1.AppDataSource.initialize();
        const fakeAppointments = Array.from({ length: 50 }, generateFakeAppointment);
        yield Appointment_1.Appointment.save(fakeAppointments);
    }
    catch (error) {
        console.log(error);
    }
    finally {
        yield db_1.AppDataSource.destroy();
    }
});
exports.appointmentsSeedDataBase = appointmentsSeedDataBase;
