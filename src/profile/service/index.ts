import { ProfileModel } from "../model";
import { Condition, FilterQuery, ObjectId } from "mongoose";
import { IProfile, IProfileInput, ProfileDocumentStatus } from "../type";
import { omit } from "lodash";
import { createReadStream } from "fs";

/**
 * Write a Profile to database.
 * @param input
 * @returns ProfileDocument
 */
export const uploadDocumentService = async (input: IProfileInput) => {
  // return await ProfileModel.create(input)
  try {
    console.log("input: ", input);
    const newInput: IProfile = {
      user_id: input.user_id,
      olevel_result: {
        name: input.olevel_result,
        status: ProfileDocumentStatus.PENDING,
      },
      birth_certificate: {
        name: input.birth_certificate,
        status: ProfileDocumentStatus.PENDING,
      },
      statutory_declaration: {
        name: input.statutory_declaration,
        status: ProfileDocumentStatus.PENDING,
      },
      jamb_result: {
        name: input.jamb_result,
        status: ProfileDocumentStatus.PENDING,
      },
      attestation_letter: {
        name: input.attestation_letter,
        status: ProfileDocumentStatus.PENDING,
      },
    };
    const profile = await ProfileModel.findOneAndUpdate(
      {
        user_id: input.user_id,
      },
      newInput
    );
  } catch (e: any) {
    console.log("error: ", e);
    throw e;
  }
};

export const createProfile = async (input: string) => {
  try {
    const profile = await ProfileModel.findOne({
      user_id: input as Condition<ObjectId>,
    });
    if (!profile) {
      const newProfile = await ProfileModel.create(input);
      console.log(newProfile);
      return { profile: newProfile };
    } else {
      console.log("Profile already exists");
      throw new Error("Profile already exists");
      // return false;
    }
  } catch (e: any) {
    console.log("error: ", e);
    throw e;
  }
};

/**
 * Find single Profile object from database.
 * @param query FilterQuery<IProfile>
 * @returns ProfileDocument
 */
export const findOneProfile = async (id: string) => {
  const data = await ProfileModel.findOne({
    user_id: id as Condition<ObjectId>,
  });
  console.log(data);
  return data;
};

/**
 * Find many Profile objects from database.
 * @param query FilterQuery<IProfile>
 * @returns ProfileDocument[]
 */
export const findManyProfiles = async (query: FilterQuery<IProfile>) => {
  return await ProfileModel.find(query);
};

/**
 * Update single Profile in database..
 * @param query FilterQuery<IProfile>
 * @param update IProfile
 * @returns ProfileDocument
 */
export const updateProfileService = async (
  query: FilterQuery<IProfile>,
  update: IProfile
) => {
  // const { data } = await updateProfile("query", update);
  return await ProfileModel.findOneAndUpdate(query, { $set: update });
};

/**
 * It deletes an Profile from the database
 * @param query - FilterQuery<IProfile>
 * @returns The return value of the function is the Profile of the deleteOne() method.
 */
export const deleteProfile = async (query: FilterQuery<IProfile>) => {
  return await ProfileModel.deleteOne(query);
};
