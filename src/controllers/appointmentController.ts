import { Request, Response } from "express";
import { Appointment } from "../models/Appointment";


export const getMyAppointments = async (req: Request, res: Response) => {
    try {

        const userId = req.tokenData.userId

        const myAppointments = await Appointment.find(
            {
                where: {
                    user: { id: userId },
                },
                relations: {
                    service: true
                },

                select: {
                    id: true,
                    appointmentDate: true,
                    service: {serviceName:true}
                }
            }
        )

        res.status(200).json(
            {
                success: true,
                message: 'Appointments retrieved succesfully',
                data: myAppointments
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


export const getAnAppointment = async (req: Request, res: Response) => {
    try {

        const userId = req.tokenData.userId
        const AppointmentId = req.params.id


        const myAppointment = await Appointment.findOne({ where: { id: parseInt(AppointmentId)},
        relations: {
            service: true,
            user: true
        },
        select: {
            id: true,
            appointmentDate: true,
            service: {serviceName: true},
            user: {firstName: true}
        }
        })

        if (req.tokenData.userId !== userId)

            if (!myAppointment) {
                return res.status(401).json({
                    success: false,
                    message: "there no appointment"
                })
            }


        res.status(200).json(
            {
                success: true,
                message: 'Appointment retrieved succesfully',
                data: myAppointment
            }
        )

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Couldnt retrieve appointment',
            error: error
        })
    }
}

export const createAppointments = async (req: Request, res: Response) => {

    try {
        const appointmentDate = req.body.appointmentDate
        const serviceId = req.body.serviceId
        const userId = req.tokenData.userId

        if (!serviceId) {
            res.status(400).json({
                success: false,
                message: "service_id is required"
            })
        }

        if (appointmentDate < new Date() || !appointmentDate) {
            return res.status(401).json({
                success: false,
                message: "Couldnt create appointment"
            })
        }
        const newAppointmentDate = await Appointment.create({
            appointmentDate: appointmentDate,
            service: { id: parseInt(serviceId) },
            user: { id: userId }
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
        const appointmentDate = (req.body.appointmentDate) as Date
        const userId = req.tokenData.userId
        const serviceId = req.body.serviceId
        
   
        const selectedAppointment = await Appointment.findOne({
            where: { 
                id: appointmentId,
                user: {id:userId} 
            }
          }
        )
   
        if (!selectedAppointment) {
            return res.status(400).json({
                success: false,
                message: "This appointment doensnt exists"
            })
        }
        if (!appointmentDate) {
            return res.status(400).json({
                success: false,
                message: "New date is needed"
            })
        }
        
        const newAppointmentDate = Appointment.update(
            { id: appointmentId },
            {
                appointmentDate: appointmentDate,
                service: {
                    id: serviceId 
                }
            }
        )

        res.status(200).json({
            success: true,
            message: "appointment updated",
            data: newAppointmentDate
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "can't update appointment",
            error: error
        })
    }
}
