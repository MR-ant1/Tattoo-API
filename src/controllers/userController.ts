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

        if (firstName.length > 255 || firstName === null) {
            return res.status(400).json({
                success: false,
                message: "Couldnt create firstName"
            })
        }
        const newFirstName = await User.create({
            firstName: firstName
        }).save()

        const lastName = req.body.lastName

        if (lastName.length > 255 || lastName === null) {
            return res.status(400).json({
                success: false,
                message: "Couldnt create lastName"
            })
        }
        const newLastName = await User.create({
            lastName: lastName
        }).save()

        const email = req.body.email

        if (email.length > 255 || email === null) {
            return res.status(400).json({
                success: false,
                message: "Couldnt create Password"
            })
        }
        const newEmail = await User.create({
            email: email
        }).save()

        const password = req.body.password

        if (password.length > 255 || password === null) {
            res.status(400).json({
                success: false,
                message: "Couldn create Password",
            })
        }

        const newPassword = await User.create({
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

    const firstName = req.body.firstName

    if (firstName.length > 255 || firstName === null) {
        return res.status(400).json({
            success: false,
            message: "Couldnt create firstName"
        })
    }
    const newFirstName = await User.create({
        firstName: firstName
    }).save()

    const lastName = req.body.lastName

    if (lastName.length > 255 || lastName === null) {
        return res.status(400).json({
            success: false,
            message: "Couldnt create lastName"
        })
    }
    const newLastName = await User.create({
        lastName: lastName
    }).save()

    const email = req.body.email

    if (email.length > 255 || email === null) {
        return res.status(400).json({
            success: false,
            message: "Couldnt create Password"
        })
    }
    const newEmail = await User.create({
        email: email
    }).save()

    const password = req.body.password

    if (password.length > 255 || password === null) {
        res.status(400).json({
            success: false,
            message: "Couldn create Password",
        })
    }

    const newPassword = await User.create({
        password: password
    }).save()

    res.status(201).json(
        {
            success: true,
            message: "User created succesfully"
        }
    )
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
    req.params.id
    res.status(200).json(
        {
            success: true,
            message: "User updated succesfully"
        }
    )
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
    req.params.id
    res.status(200).json(
        {
            success: true,
            message: "User deleted succesfully"
        }
    )
}