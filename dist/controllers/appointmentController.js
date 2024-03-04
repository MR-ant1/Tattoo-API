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
exports.deleteAppointments = exports.updateAppointment = exports.createAppointments = exports.getAnAppointment = exports.getMyAppointments = void 0;
const Appointment_1 = require("../models/Appointment");
const getMyAppointments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.tokenData.userId;
        const myAppointments = yield Appointment_1.Appointment.find({
            where: {
                user: { id: userId }
            },
            select: {
                id: true,
                appointmentDate: true,
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
        const myAppointment = yield Appointment_1.Appointment.findOne({ where: { id: parseInt(AppointmentId) } });
        if (req.tokenData.userId !== userId)
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
            res.status(400).json({
                success: false,
                message: "service_id is required"
            });
        }
        if (appointmentDate < Date.now() || !appointmentDate) {
            return res.status(401).json({
                success: false,
                message: "Couldnt create appointment"
            });
        }
        const newAppointmentDate = yield Appointment_1.Appointment.create({
            appointmentDate: appointmentDate,
            service: { id: parseInt(serviceId) },
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
        const appointmentDate = req.body.appointmentDate;
        const userId = req.tokenData.userId;
        const serviceId = req.body.serviceId;
        console.log(userId);
        console.log(appointmentId);
        console.log(serviceId);
        const selectedAppointment = yield Appointment_1.Appointment.findOne({ where: { id: appointmentId } });
        if (!appointmentId) {
            res.status(400).json({
                success: false,
                message: "This appointment doensnt exists"
            });
        }
        if (!appointmentDate) {
            res.status(400).json({
                success: false,
                message: "New date is needed"
            });
        }
        if (req.tokenData.userId !== userId) {
            return res.status(400).json({
                success: false,
                message: "not allowed"
            });
        }
        console.log(selectedAppointment);
        const newAppointmentDate = Appointment_1.Appointment.update({ user: { id: userId } }, {
            appointmentDate: appointmentDate,
            service: {
                id: serviceId
            }
        });
        res.status(200).json({
            success: true,
            message: "appointment updated",
            data: newAppointmentDate
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
const deleteAppointments = (req, res) => {
    try {
        res.status(200).json({
            success: true,
            message: 'appointment deleted succesfully'
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Couldnt delete appointment"
        });
    }
};
exports.deleteAppointments = deleteAppointments;
