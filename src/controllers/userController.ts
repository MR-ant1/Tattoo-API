import { Request, Response } from "express";
import { User } from "../models/User";
import { profile } from "console";

export const getUsers = async (req: Request, res: Response) => {
    try {
        const limit= Number(req.query.limit) || 10
        const page = Number(req.query.page) || 1
        const skip = (page -1)*limit as number


        if (limit > 25) {
            res.status(401).json ({
                success: false,
                message: "you exceed the users limit"
            })
        }

        const users = await User.find(
        
            
        
            {
                select: {
                    id: true,
                    firstName: true,
                    lastName: true,
                    email: true
                },
                take: limit,
                skip: skip 
            }
        )
        if (!users) {
            return res.status(404).json({
                success: false,
                message: "There is no Users!",
            })
        }
        res.status(200).json(
            {
                success: true,
                message: 'Users retrieved succesfully',
                data: users
            }
        )
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Couldnt get User',
            error: error
        })
    }
}

export const getUserById = async (req: Request, res: Response) => {
    try {
        const userId = req.params.id
        const user = await User.findOneBy({
            id: parseInt(userId)
        })
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "user not found"
            })
        }
        res.status(200).json({
            success: true,
            message: "user retrieved",
            data: user
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "user cant be retrieved",
            error: error
        })
    }
}

export const getProfile = async (req: Request, res: Response) => {
    try {
        const userId = req.tokenData.userId
        if (req.tokenData.userId !== (userId)) {
            res.status(400).json({
                success: false,
                message: "profile couldnt retrieve"
            })
        }
        const user = await User.findOneBy(
            { id: (userId) }
            

        )
        res.status(200).json({
            success: true,
            message: "Profile retrieved succesfully",
            data: user
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Profile cant be retrieved",
            error: error
        })
    }
}

export const updateProfile = async (req:Request, res: Response) => {
    try {   
           const userId = req.tokenData.userId
           const firstName = req.body.firstName
           const lastName = req.body.lastName
           const email = req.body.email
           
   
           if (!firstName || !lastName || !email){
               res.status(400).json ({
                   success: false,
                   message:"first Name, lastName and email are needed"
               })
           }
           const userUpdated = User.update (
              {id: userId},
              { firstName: firstName,
                lastName: lastName,
                email: email
                } 
           )
       res.status(200).json({
           success: true,
           message:"user updated",
           data: userUpdated
       })
   } catch (error) {
       res.status(500).json({
           success: false,
           message: "can't update user",
           error: error
       })
   }}