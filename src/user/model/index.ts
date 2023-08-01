import mongoose from "mongoose";
import bcrypt from "bcrypt";
import config from "config";
import {
  UserRole,
  UserRoleWithAdmin,
  UserType,
  UserTypeWithAdmin,
} from "../type/user.type";
import generateMatricNumber from "../../utils/generateMatricNum";

export interface UserInput {
  email: string;
  first_name: string;
  last_name: string;
  password: string;
  role: UserRoleWithAdmin | UserRole;
  enrollmentSession?: number;
  type: UserTypeWithAdmin | UserType;
}

export interface UserDocument extends UserInput, mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
  matriculationNumber: string;
  comparePassword(candidatePassword: string): Promise<Boolean>;
}

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["student", "teacher", "admin"],
      default: "student",
    },
    matriculationNumber: { type: String, required: true, unique: true },
    enrollmentSession: { type: Number, required: true },
    type: {
      type: String,
      enum: ["undergraduate", "postgraduate"],
      default: "undergraduate",
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  let user = this as UserDocument;

  if (!user.isModified("password")) {
    return next();
  }

  const salt = await bcrypt.genSalt(config.get<number>("saltWorkFactor"));

  const hash = await bcrypt.hashSync(user.password, salt);
  const { enrollmentSession, type } = user;
  const studentCount = await UserModel.countDocuments({
    enrollmentSession,
    type,
  });

  // Generate the matric number
  user.matriculationNumber = generateMatricNumber(
    type,
    enrollmentSession ?? 0,
    studentCount
  );

  user.password = hash;

  return next();
});

userSchema.methods.comparePassword = async function (
  candidatePassword: string
): Promise<boolean> {
  const user = this as UserDocument;

  return bcrypt.compare(candidatePassword, user.password).catch((e) => false);
};

const UserModel = mongoose.model<UserDocument>("User", userSchema);

export default UserModel;
