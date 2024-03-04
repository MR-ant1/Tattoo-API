import { AppDataSource } from "../db"
import { User } from "../../models/User";

const userSeedDataBase = async () => {
    try {
        await AppDataSource.initialize();

        const userFirstName = new User()
            userFirstName.firstName = "José"
            await userFirstName.save()

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