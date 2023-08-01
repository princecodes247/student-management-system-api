import { FilterQuery } from "mongoose";
import { CourseModel } from "../model";
import { ICourse } from "../type";
import { omit } from "lodash";
import { CreateCourseSchema } from "../schema";

/**
 * Write a result to database.
 * @param input
 * @returns CourseDocument
 */
export const createCourseService = async (input: ICourse) => {
  // return await CourseModel.create(input)
  try {
    const result = await CourseModel.findOne({
      code: input.code,
    });
    if (!result) {
      console.log({ result });
      const newCourse = await CourseModel.create(input);
      console.log(newCourse);
      return { result: newCourse };
    } else {
      console.log("Course not created");
      throw new Error("Course not created");
      // return false;
    }
  } catch (e: any) {
    console.log("sse", e);
    throw e;
  }
};

/**
 * Find single result object from database.
 * @param query FilterQuery<ICourse>
 * @returns CourseDocument
 */
export const findOneCourse = async (id: string) => {
  const data = await CourseModel.findById(id);
  console.log(data);
  return data;
};

/**
 * Find many result objects from database.
 * @param query FilterQuery<ICourse>
 * @returns CourseDocument[]
 */
export const findManyCourses = async (query: FilterQuery<ICourse>) => {
  return await CourseModel.find(query);
};

/**
 * Update single result in database..
 * @param query FilterQuery<ICourse>
 * @param update ICourse
 * @returns CourseDocument
 */
export const updateCourseService = async (
  query: FilterQuery<ICourse>,
  update: ICourse
) => {
  // const { data } = await updateCourse("query", update);
  return await CourseModel.findOneAndUpdate(query, { $set: update });
};

/**
 * It deletes an result from the database
 * @param query - FilterQuery<ICourse>
 * @returns The return value of the function is the result of the deleteOne() method.
 */
export const deleteCourse = async (query: FilterQuery<ICourse>) => {
  return await CourseModel.deleteOne(query);
};
