import { omit } from "lodash";
import { FilterQuery } from "mongoose";
import { FacultyModel } from "../model";
import { IFaculty } from "../type";

/**
 * Write a Faculty to database.
 * @param input
 * @returns FacultyDocument
 */
export const createFacultyService = async (input: IFaculty) => {
  // return await FacultyModel.create(input)
  try {
    const Faculty = await FacultyModel.findOne({
      faculty_name: input.faculty_name,
    });
    if (!Faculty) {
      console.log({ Faculty });
      const newFaculty = await FacultyModel.create(input);
      console.log(newFaculty);
      return { Faculty: newFaculty };
    } else {
      console.log("Faculty not created");
      throw new Error("Faculty not created");
      // return false;
    }
  } catch (e: any) {
    console.log("error: ", e);
    throw e;
  }
};

/**
 * Find single Faculty object from database.
 * @param query FilterQuery<IFaculty>
 * @returns FacultyDocument
 */
export const findOneFaculty = async (id: string) => {
  const data = await FacultyModel.findById(id);
  console.log(data);
  return data;
};

/**
 * Find many Faculty objects from database.
 * @param query FilterQuery<IFaculty>
 * @returns FacultyDocument[]
 */
export const findManyFaculties = async (query: FilterQuery<IFaculty>) => {
  return await FacultyModel.find(query);
};

/**
 * Update single Faculty in database..
 * @param query FilterQuery<IFaculty>
 * @param update IFaculty
 * @returns FacultyDocument
 */
export const updateFacultyService = async (
  query: FilterQuery<IFaculty>,
  update: IFaculty
) => {
  // const { data } = await updateFaculty("query", update);
  return await FacultyModel.findOneAndUpdate(query, { $set: update });
};

/**
 * It deletes an Faculty from the database
 * @param query - FilterQuery<IFaculty>
 * @returns The return value of the function is the Faculty of the deleteOne() method.
 */
export const deleteFaculty = async (query: FilterQuery<IFaculty>) => {
  return await FacultyModel.deleteOne(query);
};
