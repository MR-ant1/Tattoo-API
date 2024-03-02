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
        const serviceId = req.body.serviceId
        const userId = req.tokenData.userId

        console.log(serviceId)

        if (!serviceId) {
            res.status(400).json({
                success: false,
                message: "service_id is required"
            })
        }

        if (appointmentDate < Date.now()) {
            return res.status(401).json({
                success: false,
                message: "Couldnt create appointment"
            })
        }
        const newAppointmentDate = await Appointment.create({
            appointmentDate: appointmentDate,
            services: { id: parseInt(serviceId) },
            users: { id: userId }
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
export const updateAppointment = async (req: Request, res: Response) => {
    try {

        const appointmentId = req.body.appointmentId
        const appointmentDate = req.body.appointmentDate
        const userId = req.tokenData.userId


        if (!appointmentDate) {
            res.status(400).json({
                success: false,
                message: "any date is needed"
            })
        }
        const newDate = Appointment.update(
            { users: { id: userId } },
            {
                id: appointmentId,
                appointmentDate: appointmentDate
            }
        )

        res.status(200).json({
            success: true,
            message: "appointment updated",
            data: newDate
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "can't update appointment",
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