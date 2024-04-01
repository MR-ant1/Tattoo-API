import {faker} from "@faker-js/faker";
import { Appointment } from "../../models/Appointment";
import { AppDataSource } from "../db";
import { Service } from "../../models/Service";
import { User } from "../../models/User";





const generateFakeAppointment = () => {
    const randomAppointment = new Appointment();
    
    randomAppointment.appointmentDate = faker.date.anytime()
    
    randomAppointment.user = new User()
    randomAppointment.user.id = faker.number.int({min:1, max:9})
    
    randomAppointment.service = new Service()
    randomAppointment.service.id = faker.number.int({min:1, max:5})
    
    return randomAppointment;
}

export const appointmentsSeedDataBase = async () => {
    try {
        await AppDataSource.initialize();
             
            const fakeAppointments = Array.from({ length: 50 }, generateFakeAppointment);
            
            await Appointment.save(fakeAppointments);
    
    } catch (error) {
       console.log(error)
    }
    finally  {await AppDataSource.destroy()}
}

