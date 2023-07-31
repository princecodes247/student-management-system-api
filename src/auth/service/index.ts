import { FilterQuery } from "mongoose";
import { omit } from "lodash";
import UserModel, { UserDocument, UserInput } from "../model";
import {
  createNewUser,
  getUser,
  getUsers,
} from "../../utils/prime-trust/users";

export async function createUser(input: UserInput) {
  try {
    const primeTrustInput = { ...input };
    delete primeTrustInput.passwordConfirmation;
    const newUser = await createNewUser(primeTrustInput);
    console.log("newUser", newUser);
    if (newUser) {
      const user = await UserModel.create(primeTrustInput);
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
  const users = await getUser(id);
  return users.data;
}

export async function getAllUsers(query: FilterQuery<UserDocument>) {
  // return UserModel.findOne(query).lean();
  const users = await getUsers();
  return users.data;
}
