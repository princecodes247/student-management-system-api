import { omit } from "lodash";
import { FilterQuery } from "mongoose";
import { DepartmentModel } from "../model";
import { IDepartment } from "../type";

/**
 * Write a Department to database.
 * @param input
 * @returns DepartmentDocument
 */
export const createDepartmentService = async (input: IDepartment) => {
  // return await DepartmentModel.create(input)
  try {
    const Department = await DepartmentModel.findOne({
      name: input.name,
      faculty: input.faculty,
    });
    if (!Department) {
      console.log({ Department });
      const newDepartment = await DepartmentModel.create(input);
      console.log(newDepartment);
      return { Department: newDepartment };
    } else {
      console.log("Department already exists");
      throw new Error("Department already exists");
      // return false;
    }
  } catch (e: any) {
    console.log("error: ", e);
    throw e;
  }
};

/**
 * Find single Department object from database.
 * @param query FilterQuery<IDepartment>
 * @returns DepartmentDocument
 */
export const findOneDepartment = async (id: string) => {
  const data = await DepartmentModel.findById(id);
  console.log(data);
  return data;
};

/**
 * Find many Department objects from database.
 * @param query FilterQuery<IDepartment>
 * @returns DepartmentDocument[]
 */
export const findManyDepartments = async (query: FilterQuery<IDepartment>) => {
  return await DepartmentModel.find(query);
};

/**
 * Update single Department in database..
 * @param query FilterQuery<IDepartment>
 * @param update IDepartment
 * @returns DepartmentDocument
 */
export const updateDepartmentService = async (
  query: FilterQuery<IDepartment>,
  update: IDepartment
) => {
  // const { data } = await updateDepartment("query", update);
  return await DepartmentModel.findOneAndUpdate(query, { $set: update });
};

/**
 * It deletes an Department from the database
 * @param query - FilterQuery<IDepartment>
 * @returns The return value of the function is the Department of the deleteOne() method.
 */
export const deleteDepartment = async (query: FilterQuery<IDepartment>) => {
  return await DepartmentModel.deleteOne(query);
};
