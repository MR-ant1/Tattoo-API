import { Request, Response } from "express";
import { Appointment } from "../models/Appointment";

export const getAppointments = async (req: Request, res: Response) => {
    try {
        const appointments = await Appointment.find()

        res.status(200).json(
            {
                success: true,
                message: 'Appointments retrieved succesfully',
                data: appointments
            }
        )
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Couldnt retrieve appointments',
            error: error
        })
    }
}
export const createAppointments = async (req: Request, res: Response) => {

    try {
        const appointmentDate = req.body.appointmentDate
        const serviceId = req.body.service_id
        const userId = req.tokenData.userId

        console.log(serviceId)

        if (!serviceId) {
            res.status(400).json({
                success: false,
                message: "service_id is required"
            })
        }

        if (appointmentDate === null || appointmentDate < Date.now()) {
            return res.status(401).json({
                success: false,
                message: "Couldnt create appointment"
            })
        }
        const newAppointmentDate = await Appointment.create({
            appointmentDate: appointmentDate,
            services: {id: serviceId},
            users: {id: userId}
        }).save()

        res.status(200).json(
            {
                success: true,
                message: 'Appointment Created succesfully'
            }
        )
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Couldnt create appointment",
            error: error
        })
    }
}
export const updateAppointments = (req: Request, res: Response) => {

    try {
        req.params.id;
        console.log(req.params.id)

        res.status(200).json(
            {
                success: true,
                message: 'appointment Updated succesfully'
            }
        )
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Couldnt update appointment",
            error: error
        })
    }
}
export const deleteAppointments = (req: Request, res: Response) => {
    try {
        res.status(200).json(
            {
                success: true,
                message: 'appointment deleted succesfully'
            }
        )
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Couldnt delete appointment"
        })
    }
}