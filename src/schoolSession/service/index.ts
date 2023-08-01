import { FilterQuery } from "mongoose";
import { SchoolSessionModel } from "../model";
import { ISchoolSession } from "../type";
import { omit } from "lodash";
import { CreateSchoolSessionSchema } from "../schema";

/**
 * Write a schoolSession to database.
 * @param input
 * @returns SchoolSessionDocument
 */
export const createSchoolSessionService = async (input: ISchoolSession) => {
  // return await SchoolSessionModel.create(input)
  try {
    const schoolSession = await SchoolSessionModel.findOne({
      code: input.code,
    });
    if (schoolSession) {
      console.log("School Session not created");
      throw new Error("School Session not created");
    }

    console.log({ schoolSession });
    const newSchoolSession = await SchoolSessionModel.create(input);
    console.log(newSchoolSession);
    return { schoolSession: newSchoolSession };
  } catch (e: any) {
    console.log("sse", e);
    throw e;
  }
};

/**
 * Find single schoolSession object from database.
 * @param query FilterQuery<ISchoolSession>
 * @returns SchoolSessionDocument
 */
export const findOneSchoolSession = async (id: string) => {
  const data = await SchoolSessionModel.findById(id);
  console.log(data);
  return data;
};

/**
 * Find many schoolSession objects from database.
 * @param query FilterQuery<ISchoolSession>
 * @returns SchoolSessionDocument[]
 */
export const findManySchoolSessions = async (
  query: FilterQuery<ISchoolSession>
) => {
  return await SchoolSessionModel.find(query);
};

/**
 * Update single schoolSession in database..
 * @param query FilterQuery<ISchoolSession>
 * @param update ISchoolSession
 * @returns SchoolSessionDocument
 */
export const updateSchoolSessionService = async (
  query: FilterQuery<ISchoolSession>,
  update: ISchoolSession
) => {
  // const { data } = await updateSchoolSession("query", update);
  return await SchoolSessionModel.findOneAndUpdate(query, { $set: update });
};

/**
 * It deletes an schoolSession from the database
 * @param query - FilterQuery<ISchoolSession>
 * @returns The return value of the function is the schoolSession of the deleteOne() method.
 */
export const deleteSchoolSession = async (
  query: FilterQuery<ISchoolSession>
) => {
  return await SchoolSessionModel.deleteOne(query);
};
