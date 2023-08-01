import { FilterQuery } from "mongoose";
import { ResultModel } from "../model";
import { IResult } from "../type";
import { omit } from "lodash";
import { CreateResultSchema } from "../schema";

/**
 * Write a result to database.
 * @param input
 * @returns ResultDocument
 */
export const createResultService = async (input: IResult) => {
  // return await ResultModel.create(input)
  try {
    const result = await ResultModel.findOne({
      user: input.user,
      session: input.session,
      semester: input.semester,
    });
    if (!result) {
      console.log({ result });
      const newResult = await ResultModel.create(input);
      console.log(newResult);
      return { result: newResult };
    } else {
      console.log("Result not created");
      throw new Error("Result not created");
      // return false;
    }
  } catch (e: any) {
    console.log("sse", e);
    throw e;
  }
};

/**
 * Find single result object from database.
 * @param query FilterQuery<IResult>
 * @returns ResultDocument
 */
export const findOneResult = async (id: string) => {
  const data = await ResultModel.findById(id);
  console.log(data);
  return data;
};

/**
 * Find many result objects from database.
 * @param query FilterQuery<IResult>
 * @returns ResultDocument[]
 */
export const findManyResults = async (query: FilterQuery<IResult>) => {
  return await ResultModel.find(query);
};

/**
 * Update single result in database..
 * @param query FilterQuery<IResult>
 * @param update IResult
 * @returns ResultDocument
 */
export const updateResultService = async (
  query: FilterQuery<IResult>,
  update: IResult
) => {
  // const { data } = await updateResult("query", update);
  return await ResultModel.findOneAndUpdate(query, { $set: update });
};

/**
 * It deletes an result from the database
 * @param query - FilterQuery<IResult>
 * @returns The return value of the function is the result of the deleteOne() method.
 */
export const deleteResult = async (query: FilterQuery<IResult>) => {
  return await ResultModel.deleteOne(query);
};
