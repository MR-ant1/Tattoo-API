import bcrypt from "bcrypt"
import {faker} from "@faker-js/faker"
import { AppDataSource } from "../db"
import { User } from "../../models/User";
import { Role } from "../../models/Role";


const generateFakeUser = () => {
    const userFaker = new User();
    userFaker.firstName = faker.person.firstName();
    userFaker.lastName = faker.person.lastName();
    userFaker.email = faker.internet.email();
    userFaker.password = bcrypt.hashSync("useruser", 5);
    userFaker.role = new Role()
    userFaker.role.id = 1
    return userFaker;
}

export const userSeedDataBase = async () => {
    try {
        await AppDataSource.initialize();
             
            const userAdmin = new User()
            userAdmin.firstName = "admin"
            userAdmin.lastName = "user"
            userAdmin.email = "admin@admin.com"
            userAdmin.password = bcrypt.hashSync("useruser", 5)
            userAdmin.role = new Role()
            userAdmin.role.id = 2

            await userAdmin.save()
            
            const userSuperAdmin = new User()
            userSuperAdmin.firstName = "super_admin"
            userSuperAdmin.lastName = "super_admin"
            userSuperAdmin.email = "superadmin@superadmin.com"
            userSuperAdmin.password = bcrypt.hashSync("useruser", 5)
            userSuperAdmin.role = new Role()
            userSuperAdmin.role.id = 3

            await userSuperAdmin.save()

            
            const fakeUsers = Array.from({ length: 50 }, generateFakeUser);
            await User.save(fakeUsers);
    
    } catch (error) {
       console.log(error)
    }
    finally  {await AppDataSource.destroy()}
}
