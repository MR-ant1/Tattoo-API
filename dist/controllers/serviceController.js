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
exports.deleteServices = exports.updateServices = exports.createServices = exports.getServices = void 0;
const Service_1 = require("../models/Service");
const getServices = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield Service_1.Service.find();
        res.status(200).json({
            success: true,
            message: 'Services retrieved succesfully',
            data: users
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Couldnt get service',
            error: error
        });
    }
});
exports.getServices = getServices;
const createServices = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const serviceName = req.body.serviceName;
        const serviceDescription = req.body.description;
        if (serviceName.length > 255 || serviceName === null || serviceDescription.length > 255 || serviceDescription === null) {
            return res.status(401).json({
                success: false,
                message: "Couldnt create service"
            });
        }
        const newService = yield Service_1.Service.create({
            serviceName: serviceName,
            description: serviceDescription
        }).save();
        res.status(200).json({
            success: true,
            message: 'Services Created succesfully'
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Couldnt create Service",
            error: error
        });
    }
});
exports.createServices = createServices;
const updateServices = (req, res) => {
    try {
        req.params.id;
        console.log(req.params.id);
        res.status(200).json({
            success: true,
            message: 'Services updated succesfully'
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Couldnt update Service",
            error: error
        });
    }
};
exports.updateServices = updateServices;
const deleteServices = (req, res) => {
    try {
        req.params.id;
        res.status(200).json({
            success: true,
            message: 'Services deleted succesfully'
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Couldnt delete Service",
            error: error
        });
    }
};
exports.deleteServices = deleteServices;
