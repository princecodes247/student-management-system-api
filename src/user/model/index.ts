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
import jwt from "jsonwebtoken";

export interface UserInput {
  email: string;
  first_name: string;
  last_name: string;
  password: string;
  department: string;
  role: UserRoleWithAdmin | UserRole;
  enrollmentSession?: number | string;
  type: UserTypeWithAdmin | UserType;
}

export interface UserDocument extends UserInput, mongoose.Document {
  createdAt: Date;
  updatedAt: Date;
  matriculationNumber: string;
  comparePassword(candidatePassword: string): Promise<Boolean>;
  generateJWT(): Promise<string>;
}

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    password: { type: String, required: true },
    department: { type: mongoose.Schema.Types.ObjectId, ref: "Department" },
    phone: { type: String, default: "" },
    mothersName: { type: String, default: "" },
    nationality: { type: String, default: "" },
    stateOfOrigin: { type: String, default: "" },
    lga: { type: String, default: "" },
    address: { type: String, default: "" },
    role: {
      type: String,
      enum: Object.values(UserRoleWithAdmin),
      default: UserRoleWithAdmin.Student,
    },
    matriculationNumber: { type: String, unique: true },
    // enrollmentSession: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "SchoolSession",
    // },
    enrollmentSession: {
      type: String,
    },
    type: {
      type: String,
      enum: Object.values(UserTypeWithAdmin),
      default: UserTypeWithAdmin.Undergraduate,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  const user = this as UserDocument;

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
    (enrollmentSession ?? 0) as number,
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

userSchema.methods.generateJWT = async function () {
  const user = this as UserDocument;
  var expiry = new Date();
  expiry.setDate(expiry.getDate() + 1);
  return jwt.sign(
    {
      _id: user._id,
      email: user.email,
    },
    config.get<string>("jwtSecret"),
    { expiresIn: 60 * 60 }
  );
};

const UserModel = mongoose.model<UserDocument>("User", userSchema);

export default UserModel;
