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
const db_1 = require("../db");
const Service_1 = require("../../models/Service");
const serviceSeedDataBase = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield db_1.AppDataSource.initialize();
        const serviceCustomTattoo = new Service_1.Service();
        serviceCustomTattoo.serviceName = "Tatuajes personalizados";
        yield serviceCustomTattoo.save();
        const serviceCatalogue = new Service_1.Service();
        serviceCatalogue.serviceName = "Tatuajes del catalogo";
        yield serviceCatalogue.save();
        const serviceRestauration = new Service_1.Service();
        serviceRestauration.serviceName = "Restauracion y rejuvenecimiento de trabajos";
        yield serviceRestauration.save();
        const servicePiercing = new Service_1.Service();
        servicePiercing.serviceName = "Colocación de piercings y dilatadores";
        yield servicePiercing.save();
        const serviceSales = new Service_1.Service();
        serviceSales.serviceName = "Venta de piercings y otros artículos";
        yield serviceSales.save();
    }
    catch (error) {
        console.log(error);
    }
    finally {
        yield db_1.AppDataSource.destroy();
    }
});
serviceSeedDataBase();
