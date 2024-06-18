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
exports.serviceSeedDataBase = void 0;
const db_1 = require("../db");
const Service_1 = require("../../models/Service");
const serviceSeedDataBase = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield db_1.AppDataSource.initialize();
        const serviceCustomTattoo = new Service_1.Service();
        serviceCustomTattoo.serviceName = "Tatuajes personalizados";
        serviceCustomTattoo.description = "Los clientes tendrán la libertad de seleccionar motivos y diseños únicos, personalizando completamente su experiencia de tatuaje de acuerdo a sus preferencias y gustos.";
        yield serviceCustomTattoo.save();
        const serviceCatalogue = new Service_1.Service();
        serviceCatalogue.serviceName = "Tatuajes del catalogo";
        serviceCatalogue.description = "Ofrecemos la realización de tatuajes basados en diseños predefinidos en nuestro catálogo. Los clientes pueden elegir entre una variedad de opciones estilizadas y probadas.";
        yield serviceCatalogue.save();
        const serviceRestauration = new Service_1.Service();
        serviceRestauration.serviceName = "Restauracion y rejuvenecimiento de trabajos";
        serviceRestauration.description = "Nos especializamos en la restauración y rejuvenecimiento de tatuajes existentes. Nuestros expertos trabajan para mejorar y renovar tatuajes antiguos, devolviéndoles su vitalidad.";
        yield serviceRestauration.save();
        const servicePiercing = new Service_1.Service();
        servicePiercing.serviceName = "Colocación de piercings y dilatadores";
        servicePiercing.description = "Ofrecemos servicios profesionales para la colocación de piercings y dilatadores. Nuestro equipo garantiza procedimientos seguros y estilos variados para satisfacer las preferencias individuales de nuestros clientes.";
        yield servicePiercing.save();
        const serviceSales = new Service_1.Service();
        serviceSales.serviceName = "Venta de piercings y otros artículos";
        serviceSales.description = "Además de nuestros servicios de aplicación, ofrecemos una selección de piercings y otros artículos relacionados con el arte corporal. Los clientes pueden adquirir productos de calidad para complementar su estilo único.";
        yield serviceSales.save();
    }
    catch (error) {
        console.log(error);
    }
    finally {
        yield db_1.AppDataSource.destroy();
    }
});
exports.serviceSeedDataBase = serviceSeedDataBase;
