import { AppDataSource } from "../db"
import { Service } from "../../models/Service";

export const serviceSeedDataBase = async () => {
    try {
        await AppDataSource.initialize();

        const serviceCustomTattoo = new Service()
            serviceCustomTattoo.serviceName = "Tatuajes personalizados"
            serviceCustomTattoo.description = "Los clientes tendrán la libertad de seleccionar motivos y diseños únicos, personalizando completamente su experiencia de tatuaje de acuerdo a sus preferencias y gustos."
            await serviceCustomTattoo.save()

            const serviceCatalogue = new Service()
            serviceCatalogue .serviceName = "Tatuajes del catalogo"
            serviceCatalogue.description = "Ofrecemos la realización de tatuajes basados en diseños predefinidos en nuestro catálogo. Los clientes pueden elegir entre una variedad de opciones estilizadas y probadas."
            await serviceCatalogue.save()

            const serviceRestauration = new Service()
            serviceRestauration .serviceName = "Restauracion y rejuvenecimiento de trabajos"
            serviceRestauration.description = "Nos especializamos en la restauración y rejuvenecimiento de tatuajes existentes. Nuestros expertos trabajan para mejorar y renovar tatuajes antiguos, devolviéndoles su vitalidad."
            await serviceRestauration.save()

            const servicePiercing = new Service()
            servicePiercing .serviceName = "Colocación de piercings y dilatadores"
            servicePiercing.description = "Ofrecemos servicios profesionales para la colocación de piercings y dilatadores. Nuestro equipo garantiza procedimientos seguros y estilos variados para satisfacer las preferencias individuales de nuestros clientes."
            await servicePiercing.save()

            const serviceSales = new Service()
            serviceSales.serviceName = "Venta de piercings y otros artículos"
            serviceSales.description = "Además de nuestros servicios de aplicación, ofrecemos una selección de piercings y otros artículos relacionados con el arte corporal. Los clientes pueden adquirir productos de calidad para complementar su estilo único."
            await serviceSales.save()
        
    } catch (error) {
       console.log(error)
    }
    finally  {await AppDataSource.destroy()}
}
