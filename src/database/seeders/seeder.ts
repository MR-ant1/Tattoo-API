
import { appointmentsSeedDataBase } from "./appointmentsSeeders";
import { roleSeedDataBase } from "./rolesSeeders";
import { serviceSeedDataBase } from "./servicesSeeders";
import { userSeedDataBase } from "./usersSeeders";


const launchSeeder = async () => {
    await roleSeedDataBase();
    await serviceSeedDataBase();
    await userSeedDataBase();
    await appointmentsSeedDataBase();
}
  launchSeeder();