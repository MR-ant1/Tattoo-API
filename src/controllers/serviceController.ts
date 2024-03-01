import { Request, Response } from "express";
import { Service } from "../models/Service";

export const getServices = async (req: Request, res: Response) => {
    try {
        const users = await Service.find()

        res.status(200).json(
            {
                success: true,
                message: 'Services retrieved succesfully',
                data: users
            }
        )
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Couldnt get service',
            error: error
        })
    }
}
export const createServices = async (req: Request, res: Response) => {

    try {
        const serviceName = req.body.serviceName
        const serviceDescription = req.body.description

        if (serviceName.length > 255 || serviceName === null || serviceDescription.length > 255 || serviceDescription === null) {
            return res.status(401).json({
                success: false,
                message: "Couldnt create service"
            })
        }
        const newService = await Service.create({
            serviceName: serviceName,
            description: serviceDescription
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