import { Schema } from "mongoose";
import mongoose from 'mongoose';
import { UserDocument } from '../type';

const UserSchema = new Schema({
    name: { type: String, required: true, },
    deletedAt: { type: Date, default: Date.now() }
}, { timestamps: true })

export const UserModel = mongoose.model<UserDocument>('User', UserSchema)