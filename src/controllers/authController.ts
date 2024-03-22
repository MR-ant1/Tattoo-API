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


        if (password.length < 8 || password.length > 14) {
            return res.status(400).json({
                success: false,
                message: "Password must contain between 8 and 14 characters"
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
            data: firstName
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
                //   |  DE MANERA TEMPORAL SE INCLUYE ANY AL NO PODER DELCARARSE USER EN LA VERIFICACION DE CONTRASEÑA
        const user = await User.findOne(
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
            return res.status(400).json({
                success: false,
                message: "Email or password invalid"
            })
        }

        const isValidPassword = bcrypt.compareSync(password, user!.password)

        if (!isValidPassword) {
            return res.status(400).json({
                success: false,
                message: "Email or password invalid"
            })
        }

        const token = jwt.sign(
            {
                userId: user!.id,
                firstName: user!.firstName,
                roleName: user!.role.name
            },
            process.env.JWT_SECRET as string,
            {
                expiresIn: "2h"
            }
        )

        res.status(200).json({
            success: true,
            message: "User logged succesfully",
            token: token //MOSTRAMOS EL TOKEN DE MANERA TEMPORAL PARA PODER PROBAR CON ÉL OTRA FUNCIONALIDADES
        })

    } catch (error) {

        res.status(500).json({
            success: false,
            message: "User cant be logged",
            error: error
        })
    }
}
