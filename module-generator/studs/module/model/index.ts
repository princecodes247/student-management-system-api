import { Schema, model } from "mongoose";
import { UserDocument } from '../type';

const UserSchema = new Schema({
    name: { type: String, required: true, },
    deletedAt: { type: Date, default: Date.now() }
}, { timestamps: true })

export const UserModel = model<UserDocument>('User', UserSchema)