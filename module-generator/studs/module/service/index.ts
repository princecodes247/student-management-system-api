import { FilterQuery } from "mongoose";
import { UserModel } from "../model";
import { IUser } from "../type";


/**
 * Write user to database.
 * @param input 
 * @returns UserDocument
 */
export const createUser = async (input: IUser) => {
    return await UserModel.create(input)
}


/**
 * Find single user object from database.
 * @param query FilterQuery<IUser>  
 * @returns UserDocument
 */
export const findOneUser = async (query: FilterQuery<IUser>) => {
    return await UserModel.findOne(query)
}



/**
 * Find many user objects from database.
 * @param query FilterQuery<IUser> 
 * @returns UserDocument[]
 */
export const findManyUser = async (query: FilterQuery<IUser>) => {
    return await UserModel.find(query)
}

/**
 * Update single user in database..
 * @param query FilterQuery<IUser>  
 * @param update IUser  
 * @returns UserDocument
 */
export const updateUser = async (query: FilterQuery<IUser>, update: IUser) => {
    return await UserModel.findOneAndUpdate(query, { $set: update })
}


/**
 * Update single user in database..
 * @param query FilterQuery<IUser>
 * @returns null
 */
export const deleteUser = async (query: FilterQuery<IUser>) => {
    return await UserModel.deleteOne(query)
}