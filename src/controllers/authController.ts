import { Request, Response } from "express";
import { User } from "../models/User";
import bcrypt from "bcrypt"

export const registerUser = async (req: Request, res: Response) => {
    try {
        const firstName = req.body.firstName
        const lastName = req.body.lastName
        const email = req.body.email
        const password = req.body.password


        if (password.length < 6 || password.length > 10) {
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
            roles: { id:1}
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