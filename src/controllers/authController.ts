import { Request, Response } from "express";
import { User } from "../models/User";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"

export const registerUser = async (req: Request, res: Response) => {
    try {
        const firstName = req.body.firstName
        const lastName = req.body.lastName
        const email = req.body.email
        const password = req.body.password


        if (password.length < 8 || password.length > 20) {
            return res.status(400).json({
                success: false,
                message: "Password must contain between 6 and 10 characters"
            })
        }


        const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        if (!validEmail.test(email)) {
            return res.status(400).json(
                {
                    success: false,
                    message: "format email invalid"
                }
            )
        }
        const passwordEncrypted = bcrypt.hashSync(password, 5)
        console.log(passwordEncrypted);

        const newUser = await User.create({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: passwordEncrypted,
            role: { id: 1 }
        }).save()
        res.status(201).json({
            success: true,
            message: "User registered succesfully",
            data: newUser
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "User cant be registered",
            error: error
        })
    }
}

export const login = async (req: Request, res: Response) => {
    
    try {
        const email = req.body.email
        const password = req.body.password

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "email and password are mandatories"
            })
        }

        const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        if (!validEmail.test(email)) {
            return res.status(400).json(
                {
                    success: false,
                    message: "Email format is not valid"
                }
            )
        }

        const user: any = await User.findOne(
            {
                where: {
                    email: email
                },
                relations: {
                    role: true
                },
                select: {
                    id: true,
                    password: true,
                    email: true,
                    role: {
                        id: true,
                        name: true
                    }
                }
            }
        )

        if (!user) {
            res.status(400).json({
                success: false,
                message: "Email or password invalid"
            })
        }

        const isValidPassword = bcrypt.compareSync(password, user.password)

        if (!isValidPassword) {
            return res.status(400).json({
                success: false,
                message: "Email or password invalid"
            })
        }
        res.status(200).json({
            success: true,
            message: "User logged succesfully",
        })

    } catch (error) {

        res.status(500).json({
            success: false,
            message: "User cant be logged",
            error: error
        })
    }
}
