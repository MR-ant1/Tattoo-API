import bcrypt from "bcrypt"

import { AppDataSource } from "../db"
import { User } from "../../models/User";
import { Role } from "../../models/Role";

const userSeedDataBase = async () => {
    try {
        await AppDataSource.initialize();

            const userUser = new User()
            userUser.firstName = "user"
            userUser.lastName = "user"
            userUser.email = "user@user.com"
            userUser.password = bcrypt.hashSync("useruser", 5)
            userUser.role = new Role()
            userUser.role.id = 1
             
        
            const userAdmin = new User()
            userAdmin.firstName = "admin"
            userAdmin.lastName = "admin"
            userAdmin.email = "admin@admin.com"
            userAdmin.password = bcrypt.hashSync("useruser", 5)
            userAdmin.role = new Role()
            userAdmin.role.id = 2
            
            const userSuperAdmin = new User()
            userSuperAdmin.firstName = "super_admin"
            userSuperAdmin.lastName = "super_admin"
            userSuperAdmin.email = "superadmin@superadmin.com"
            userSuperAdmin.password = bcrypt.hashSync("useruser", 5)
            userSuperAdmin.role = new Role()
            userSuperAdmin.role.id = 3

            await userAdmin.save()

            const userLastName = new User()
            userLastName.lastName = "martinez"
            await userLastName.save()

            const userEmail = new User()
            userEmail.email = "email"
            await userEmail.save()

            const userPassword = new User()
            userPassword.password = "password"
            await userPassword.save()
        
    } catch (error) {
       console.log(error)
    }
    finally  {await AppDataSource.destroy()}
}

userSeedDataBase()