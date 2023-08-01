import { FilterQuery } from "mongoose";
import { omit } from "lodash";
import UserModel, { UserDocument, UserInput } from "../../user/model";

export async function createUser(input: UserInput) {
  try {
    const userExists = await UserModel.findOne({ email: input.email });
    if (!userExists) {
      const user = await UserModel.create(input);
      return omit(user.toJSON(), "password");
    } else {
      console.log("User not created");
      throw new Error("User not created");
      // return false;
    }
  } catch (e: any) {
    // console.log("e", e);

    console.log("e", e.response.data);
    console.log("source", e.response.data.errors[0].source);
    if (e.response) {
      throw new Error(
        e.response.data.errors[0]?.source?.pointer +
          ": " +
          e.response.data.errors[0].detail
      );
    }
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
