import { Request, Response } from "express";
import { Appointment } from "../models/Appointment";


export const getAppointments = (req: Request, res: Response) => {
    try {
        res.status(200).json(
            {
                success: true,
                message: 'Appointment retrieved succesfully'
            }
        )
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Couldnt retrieve appointment",
            error: error
        })
    }
}
export const createAppointments = async (req: Request, res: Response) => {

    try {
        const appointmentDate = req.body.appointmentDate

        if (appointmentDate === null) {
            return res.status(400).json({
                success: false,
                message: "Couldnt create appointmentDate"
            })
        }
        const newAppointmentDate = await Appointment.create({
            appointmentDate: appointmentDate
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
        res.status(500).json ({
            success: false,
            message: "Couldnt delete appointment"
        })
    }
    }