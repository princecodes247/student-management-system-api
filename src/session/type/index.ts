import mongoose from 'mongoose';


export interface ISession {
    email: string;
    name: string;
    password: string;
}

export interface SessionDocument extends ISession {
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}


