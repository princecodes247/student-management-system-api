import { Request, Response } from "express"
import { createUser, findOneUser, findManyUser, updateUser, deleteUser } from "../service"
import { StatusCodes } from "http-status-codes"


/**
 * Create User Controller
 * @param req 
 * @param res 
 * @returns 
 */
export const createUserHandler = async (req: Request, res: Response) => {
    try {
        return res.json(await createUser(req.body))
    } catch (error: any) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: true, message: error.message })
    }
}

/**
 * Find Singe User Controller
 * @param req 
 * @param res 
 * @returns 
 */
export const findOneUserHandler = async (req: Request, res: Response) => {
    try {
        return res.json(await findOneUser({ _id: req.params.id }))
    } catch (error: any) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: true, message: error.message })
    }
}

/**
 * Find Many User Controller
 * @param req 
 * @param res 
 * @returns 
 */
export const findManyUserHandler = async (req: Request, res: Response) => {
    try {
        return res.json(await findManyUser(req.query ?? {}))
    } catch (error: any) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: true, message: error.message })
    }
}

/**
 * Update User Controller
 * @param req 
 * @param res 
 * @returns 
 */
export const updateUserHandler = async (req: Request, res: Response) => {
    try {
        return res.json(await updateUser(req.query ?? { _id: req.params._id }, req.body))
    } catch (error: any) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: true, message: error.message })
    }
}

/**
 * Delete User Controller
 * @param req 
 * @param res 
 * @returns 
 */
export const deleteUserHandler = async (req: Request, res: Response) => {
    try {
        return res.json(await deleteUser(req.query ?? { _id: req.params._id }))
    } catch (error: any) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: true, message: error.message })
    }
}