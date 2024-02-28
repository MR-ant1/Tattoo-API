import { Request, Response } from "express";

export const register = (req: Request, res: Response) => {
    try {
        res.status(201).json({
            success: true,
            message: "User registered succesfully"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "User cant be registered",
            error: error
        })
    }
}