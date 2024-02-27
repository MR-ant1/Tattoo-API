import { Request, Response } from "express"

export const getRoles = (req: Request, res: Response) => {
    try {
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
    res.status(200).json(
        {
            success: true,
            message: 'Roles retrieved succesfully'
        }
    )
}
export const createRoles = (req: Request, res: Response) => {

    try {
        req.body;
        res.status(200).json(
            {
                success: true,
                message: 'roles created succesfully'
            }
        )   
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "can't create roles",
            error: error
        })
    }
    //recuperar info mediante body
    console.log(req.body);
    res.status(200).json(
        {
            success: true,
            message: 'Roles Created succesfully'
        }
    )
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
    req.params.id;
    console.log(req.params.id)

    res.status(200).json(
        {
            success: true,
            message: 'roles Updated succesfully'
        }
    )
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
    res.status(200).json(
        {
            success: true,
            message: 'roles deleted succesfully'
        }
    )
}