import { Request, Response } from "express";
import { User } from "../models/User";

export const getUsers = (req: Request, res: Response) => {
    try {
        res.status(200).json(
            {
                success: true,
                message: 'Users retrieved succesfully'
            }
        )
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Couldnt get User',
            error: error
        })
    }
    res.status(200).json(
        {
            success: true,
            message: 'Users retrieved succesfully'
        }
    )
}
//SOLO CON ESTE ASYNC ES SUFICENTE??? APUNTAR ENTIDADES AÑADIDAS EN EL PROX COMMIT. PORQUE NO FUNCIONA POST
export const createUsers = async (req: Request, res: Response) => {
    try {
        const firstName = req.body.firstName
        const lastName = req.body.lastName
        const email = req.body.email
        const password = req.body.password

        if (firstName.length > 255 || firstName === null) {
            return res.status(400).json({
                success: false,
                message: "Couldnt create firstName"
            })
        }

        if (lastName.length > 255 || lastName === null) {
            return res.status(400).json({
                success: false,
                message: "Couldnt create lastName"
            })
        }

        if (email.length > 255 || email === null) {
            return res.status(400).json({
                success: false,
                message: "Couldnt create Password"
            })
        }

        if (password.length > 255 || password === null) {
            return res.status(400).json({
                success: false,
                message: "Couldn create Password",
            })
        }
        const newUser = await User.create({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        }).save()

        res.status(201).json(
            {
                success: true,
                message: "User created succesfully"
            }
        )
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Couldnt create user",
            error: error
        })
    }
}
export const updateUsers = (req: Request, res: Response) => {
    try {
        req.params.id
        res.status(200).json(
            {
                success: true,
                message: "User updated succesfully"
            }
        )
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Couldnt update User",
            error: error
        })
    }
}
export const deleteUsers = (req: Request, res: Response) => {
    try {
        req.params.id
        res.status(200).json(
            {
                success: true,
                message: "User deleted succesfully"
            }
        )
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Couldnt delete User",
            error: error
        })
    }
}