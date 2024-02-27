import { Request, Response } from "express";

export const getUsers = (req: Request, res: Response) => {
    res.status(200).json(
        {
            success: true,
            message: 'Users retrieved succesfully'
        }
    )
}

export const createUsers = (req: Request, res: Response) => {
    res.status(201).json(
        {
            success: true,
            message: "User created succesfully"
        }
    )
}
export const updateUsers = (req: Request, res: Response) => {
    res.status(200).json(
        {
            success: true,
            message: "User updated succesfully"
        }
    )
}
export const deleteUsers = (req: Request, res: Response) => {
    res.status(200).json(
        {
            success: true,
            message: "User deleted succesfully"
        }
    )
}