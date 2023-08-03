import { FilterQuery } from "mongoose";
import { omit } from "lodash";
import UserModel, { UserDocument, UserInput } from "../../user/model";
import { UpdateUserInput } from "../type/user.type";

export async function createUser(input: UserInput) {
  try {
    const userExists = await UserModel.findOne({ email: input.email });
    if (!userExists) {
      const user = await UserModel.create(input);
      return omit(user.toJSON(), "password");
    } else {
      console.log("User not created");
      throw new Error("User not created: Email already exists");
      // return false;
    }
  } catch (e: any) {
    // console.log("e", e);

    console.log("e", e);

    throw new Error(e);
  }
}

export async function login({
  matriculationNumber,
  password,
}: {
  matriculationNumber: string;
  password: string;
}) {
  try {
    if (!matriculationNumber) throw new Error("Email is required");
    if (!password) throw new Error("Password is required");

    const user = await UserModel.findOne({ matriculationNumber });
    if (!user) throw new Error("Invalid matriculationNumber or password");

    const isValid = await user.comparePassword(password);
    if (!isValid) throw new Error("Invalid Email or Password");

    const token = await user.generateJWT();

    return {
      _id: user._id,
      matriculationNumber: user.matriculationNumber,
      token: token,
    };
  } catch (e: any) {
    // console.log("e", e);

    throw new Error(e);
  }
}

export async function validatePassword({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const user = await UserModel.findOne({ email });

  if (!user) {
    return false;
  }

  const isValid = await user.comparePassword(password);

  if (!isValid) return false;

  return omit(user.toJSON(), "password");
}

export async function findUser(id: string) {
  // return UserModel.findOne(query).lean();
  const user = await UserModel.findById(id).lean();
  return user;
}

export async function getAllUsers(query: FilterQuery<UserDocument>) {
  // return UserModel.findOne(query).lean();
  const users = await UserModel.findOne(query).lean();
  return users;
}

export async function updateUser(id: string, input: UpdateUserInput) {
  const user = await UserModel.findByIdAndUpdate(
    id,
    { ...input },
    { new: true }
  ).lean();

  if (!user) {
    throw new Error("User not found");
  }

  return omit(user, "password");
}
