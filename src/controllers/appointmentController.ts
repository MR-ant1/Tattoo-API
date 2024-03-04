import { Request, Response } from "express";
import { Appointment } from "../models/Appointment";
import { User } from "../models/User";

export const getMyAppointments = async (req: Request, res: Response) => {
    try {

        const userId = req.tokenData.userId

        const myAppointments = await Appointment.find(
            {
              where :{
                user: {id: userId}
              },
              
              select: {
                id: true,
                appointmentDate: true,
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
        

        const myAppointment = await Appointment.findOne({ where: {id: parseInt(AppointmentId)}})
        
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

        if (appointmentDate < Date.now() || !appointmentDate) {
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
        const appointmentDate = req.body.appointmentDate
        const userId = req.tokenData.userId
        const serviceId = req.body.serviceId
        console.log(userId)
        console.log(appointmentId)
        console.log(serviceId)

        const selectedAppointment = await Appointment.findOne({where: {id: appointmentId},
        select: {
            appointmentDate: true,
            service: serviceId,
        }})

        if(!appointmentId) {
            res.status(400).json({
                success: false,
                message: "This appointment doensnt exists"
            }) 
        }
        if (!appointmentDate) {
            res.status(400).json({
                success: false,
                message: "New date is needed"
            })
        }
        if (req.tokenData.userId !== userId) {
            return res.status(400).json({
                success: false,
                message: "not allowed"
            })
        }
        console.log(selectedAppointment)
        
        const newAppointmentDate = Appointment.update(
            { user: { id: userId } },
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