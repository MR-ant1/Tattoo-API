import { Request, Response } from "express"
import { Role } from "../models/Role"

export const getRoles = async (req: Request, res: Response) => {
    try {
        const roles = await Role.find(
            {                          
                select: {
                    id: true,
                    name: true
                }
            }
        )
        res.status(200).json(
            {
                success: true,
                message: 'Roles retrieved succesfully'
            }
        )
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "can't retrieve roles",
            error: error
        })
    }
}
export const createRoles = async (req: Request, res: Response) => {
    //recuperar info mediante body
    try {
        const name = req.body.name

        if (name.length > 40) {
            return res.status(400).json({
                success: false,
                message: "Role name must be under 40 characters"
            })
        }

        const newRole = await Role.create({
            name: name
        }).save()

        res.status(200).json(
            {
                success: true,
                message: 'Roles Created succesfully'
            }
        )
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "can't create roles",
            error: error
        })
    }
}
export const updateRoles = (req: Request, res: Response) => {
    try {
        req.params.id;
        console.log(req.params.id)

        res.status(200).json(
            {
                success: true,
                message: 'roles Updated succesfully'
            }
        )
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "can't update roles",
            error: error
        })
    }
}
export const deleteRoles = (req: Request, res: Response) => {
    try {
        req.params.id;
        console.log(req.params.id)

        res.status(200).json(
            {
                success: true,
                message: 'roles deleted succesfully'
            }
        )
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "can't delete roles",
            error: error
        })
    }
}