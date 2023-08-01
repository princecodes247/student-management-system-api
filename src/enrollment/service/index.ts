import { FilterQuery } from "mongoose";
import { EnrollmentModel } from "../model";
import { IEnrollment } from "../type";
import { omit } from "lodash";
import { CreateEnrollmentSchema } from "../schema";

/**
 * Write a result to database.
 * @param input
 * @returns EnrollmentDocument
 */
export const createEnrollmentService = async (input: IEnrollment) => {
  // return await EnrollmentModel.create(input)
  try {
    const result = await EnrollmentModel.findOne({
      student: input.student,
      session: input.session,
      semester: input.semester,
    });
    if (!result) {
      console.log({ result });
      const newEnrollment = await EnrollmentModel.create(input);
      console.log(newEnrollment);
      return { result: newEnrollment };
    } else {
      console.log("Enrollment not created");
      throw new Error("Enrollment not created");
      // return false;
    }
  } catch (e: any) {
    console.log("sse", e);
    throw e;
  }
};

/**
 * Find single result object from database.
 * @param query FilterQuery<IEnrollment>
 * @returns EnrollmentDocument
 */
export const findOneEnrollment = async (id: string) => {
  const data = await EnrollmentModel.findById(id);
  console.log(data);
  return data;
};

/**
 * Find many result objects from database.
 * @param query FilterQuery<IEnrollment>
 * @returns EnrollmentDocument[]
 */
export const findManyEnrollments = async (query: FilterQuery<IEnrollment>) => {
  return await EnrollmentModel.find(query);
};

/**
 * Update single result in database..
 * @param query FilterQuery<IEnrollment>
 * @param update IEnrollment
 * @returns EnrollmentDocument
 */
export const updateEnrollmentService = async (
  query: FilterQuery<IEnrollment>,
  update: IEnrollment
) => {
  // const { data } = await updateEnrollment("query", update);
  return await EnrollmentModel.findOneAndUpdate(query, { $set: update });
};

/**
 * It deletes an result from the database
 * @param query - FilterQuery<IEnrollment>
 * @returns The return value of the function is the result of the deleteOne() method.
 */
export const deleteEnrollment = async (query: FilterQuery<IEnrollment>) => {
  return await EnrollmentModel.deleteOne(query);
};
