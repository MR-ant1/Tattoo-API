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
exports.deleteMyAppointment = exports.updateAppointment = exports.createAppointments = exports.getAnAppointment = exports.getMyAppointments = void 0;
const Appointment_1 = require("../models/Appointment");
const getMyAppointments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.tokenData.userId;
        const myAppointments = yield Appointment_1.Appointment.find({
            where: {
                user: { id: userId },
            },
            relations: {
                service: true,
                user: true
            },
            select: {
                id: true,
                appointmentDate: true,
                service: { serviceName: true },
                user: { id: true, firstName: true, lastName: true }
            }
        });
        res.status(200).json({
            success: true,
            message: 'Appointments retrieved succesfully',
            data: myAppointments
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Couldnt retrieve appointments',
            error: error
        });
    }
});
exports.getMyAppointments = getMyAppointments;
const getAnAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.tokenData.userId;
        const AppointmentId = req.params.id;
        const myAppointment = yield Appointment_1.Appointment.findOne({
            where: {
                id: parseInt(AppointmentId),
                user: { id: userId }
            },
            relations: {
                service: true,
                user: true
            },
            select: {
                id: true,
                appointmentDate: true,
                service: { serviceName: true },
                user: { firstName: true }
            }
        });
        if (!myAppointment) {
            return res.status(401).json({
                success: false,
                message: "there no appointment"
            });
        }
        res.status(200).json({
            success: true,
            message: 'Appointment retrieved succesfully',
            data: myAppointment
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Couldnt retrieve appointment',
            error: error
        });
    }
});
exports.getAnAppointment = getAnAppointment;
const createAppointments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const appointmentDate = req.body.appointmentDate;
        const serviceId = req.body.serviceId;
        const userId = req.tokenData.userId;
        if (!serviceId) {
            return res.status(400).json({
                success: false,
                message: "service_id is required"
            });
        }
        // if (appointmentDate < new Date || !appointmentDate) {
        //     return res.status(401).json({
        //         success: false,
        //         message: "Couldnt create appointment"
        //     })
        // }
        const newAppointmentDate = yield Appointment_1.Appointment.create({
            appointmentDate: appointmentDate,
            service: { id: serviceId },
            user: { id: userId }
        }).save();
        res.status(200).json({
            success: true,
            message: 'Appointment Created succesfully'
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Couldnt create appointment",
            error: error
        });
    }
});
exports.createAppointments = createAppointments;
const updateAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const appointmentId = req.body.appointmentId;
        const appointmentDate = (req.body.appointmentDate);
        const userId = req.tokenData.userId;
        const serviceId = req.body.serviceId;
        const selectedAppointment = yield Appointment_1.Appointment.findOne({
            where: {
                id: appointmentId,
                user: { id: userId }
            }
        });
        if (!selectedAppointment) {
            return res.status(400).json({
                success: false,
                message: "This appointment doensnt exists"
            });
        }
        if (!appointmentDate) {
            return res.status(400).json({
                success: false,
                message: "New date is needed"
            });
        }
        const newAppointmentDate = Appointment_1.Appointment.update({ id: appointmentId }, {
            appointmentDate: appointmentDate,
            service: {
                id: serviceId
            }
        });
        res.status(200).json({
            success: true,
            message: "appointment updated",
            newDate: appointmentDate, service: { serviceId }
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "can't update appointment",
            error: error
        });
    }
});
exports.updateAppointment = updateAppointment;
const deleteMyAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const appointmentId = req.params.id;
        const userId = req.tokenData.userId;
        if (!appointmentId) {
            return res.status(400).json({
                success: false,
                message: "This appointment doesnt exists"
            });
        }
        else {
            const findAppointment = yield Appointment_1.Appointment.findOne({
                where: { id: parseInt(appointmentId),
                    user: { id: userId } }
            });
            if (!findAppointment) {
                return res.status(400).json({
                    success: false,
                    message: "Couldnt find your appointment"
                });
            }
            const deletedAppointment = yield Appointment_1.Appointment.delete(findAppointment);
            res.status(200).json({
                success: true,
                message: "appointment deleted",
                data: appointmentId
            });
        }
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "can't delete appointment",
            error: error
        });
    }
});
exports.deleteMyAppointment = deleteMyAppointment;
