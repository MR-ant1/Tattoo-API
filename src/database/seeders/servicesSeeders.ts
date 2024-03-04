import { AppDataSource } from "../db"
import { Service } from "../../models/Service";

const serviceSeedDataBase = async () => {
    try {
        await AppDataSource.initialize();

        const serviceCustomTattoo = new Service()
            serviceCustomTattoo.serviceName = "Tatuajes personalizados"
            await serviceCustomTattoo.save()

            const serviceCatalogue = new Service()
            serviceCatalogue .serviceName = "Tatuajes del catalogo"
            await serviceCatalogue.save()

            const serviceRestauration = new Service()
            serviceRestauration .serviceName = "Restauracion y rejuvenecimiento de trabajos"
            await serviceRestauration.save()

            const servicePiercing = new Service()
            servicePiercing .serviceName = "Colocación de piercings y dilatadores"
            await servicePiercing.save()

            const serviceSales = new Service()
            serviceSales .serviceName = "Venta de piercings y otros artículos"
            await serviceSales.save()
        
    } catch (error) {
       console.log(error)
    }
    finally  {await AppDataSource.destroy()}
}

serviceSeedDataBase()