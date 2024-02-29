import { Request, Response } from "express";
import { Service } from "../models/Service";

export const getServices = async (req: Request, res: Response) => {
    try {
        const services = await Service.find(
            {
                select: {
                    id: true,
                    serviceName: true,
                    description: true
                }
            }
        )
        res.status(200).json(
            {
                success: true,
                message: 'Services retrieved succesfully',
                data: services
            }
        )
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Couldnt retrieve service",
            error: error
        })
    }
}
export const createServices = async (req: Request, res: Response) => {

    try {
        const serviceName = req.body.serviceName

        if (serviceName.length > 255 || serviceName) {
            return res.status(400).json({
                success: false,
                message: "Couldnt create firstName"
            })
        }
        const newServiceName = await Service.create({
            serviceName: serviceName
        }).save()


        const description = req.body.description

        if (description.length > 255 || description === null) {
            return res.status(400).json({
                success: false,
                message: "Couldnt create firstName"
            })
        }
        const newDescription = await Service.create({
            description: description
        }).save()

        res.status(200).json(
            {
                success: true,
                message: 'Services Created succesfully'
            })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Couldnt create Service",
            error: error
        })
    }

}
export const updateServices = (req: Request, res: Response) => {

    try {
        req.params.id;
        console.log(req.params.id)

        res.status(200).json(
            {
                success: true,
                message: 'Services updated succesfully'
            }
        )
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Couldnt update Service",
            error: error
        })
    }
}
export const deleteServices = (req: Request, res: Response) => {
    try {
        req.params.id
        res.status(200).json(
            {
                success: true,
                message: 'Services deleted succesfully'
            }
        )
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Couldnt delete Service",
            error: error
        })
    }
}