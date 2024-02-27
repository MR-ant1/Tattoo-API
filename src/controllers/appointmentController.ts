import { Request, Response } from "express";

export const getAppointment = (req: Request, res: Response) => {
    res.status(200).json(
        {
            success: true,
            message: 'Roles retrieved succesfully'
        }
    )
}
export const createAppointment = (req: Request, res: Response) => {

    //recuperar info mediante body
    console.log(req.body);
    res.status(200).json(
        {
            success: true,
            message: 'Roles Created succesfully'
        }
    )
}
export const updateAppointment = (req: Request, res: Response) => {

    req.params.id;
    console.log(req.params.id)

    res.status(200).json(
        {
            success: true,
            message: 'roles Updated succesfully'
        }
    )
}
export const deleteAppointment = (req: Request, res: Response) => {
    res.status(200).json(
        {
            success: true,
            message: 'roles deleted succesfully'
        }
    )
}