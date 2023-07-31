import mongoose from 'mongoose';


export interface IUser {
    email: string;
    name: string;
    password: string;
}

export interface UserDocument extends IUser {
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}


