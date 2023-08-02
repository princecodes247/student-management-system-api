import { FilterQuery } from "mongoose";
import { EnrollmentModel } from "../model";
import { IEnrollment, IEnrollmentInput } from "../type";
import { omit } from "lodash";
import { CreateEnrollmentSchema } from "../schema";
import { findManyCourses } from "../../course/service";

/**
 * Write a result to database.
 * @param input
 * @returns EnrollmentDocument
 */
export const createEnrollmentService = async (input: IEnrollmentInput) => {
  // return await EnrollmentModel.create(input)
  try {
    const result = await EnrollmentModel.findOne({
      student: input.student,
      session: input.session + "11",
      semester: input.semester,
    });
    if (!result) {
      console.log({ result });
      // Check iƒ the sum of the units of the courses is equal to 24
      const courses = await findManyCourses({
        _id: { $in: input.courses },
      });
      let totalUnits = 0;
      courses.forEach((course) => {
        totalUnits += course.unit;
      });
      if (totalUnits !== 24) {
        throw new Error("Total units must be equal to 24");
      }
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
