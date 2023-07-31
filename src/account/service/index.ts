import { FilterQuery } from "mongoose";
import { AccountModel } from "../model";
import { IAccount } from "../type";
import { omit } from "lodash";
import {
  createAccount,
  fundAccountSandbox,
  getAccount,
  getAccountAssetTotals,
  openAccount,
  updateAccount,
} from "../../utils/prime-trust/accounts";
import { IAccountAttributes } from "../../utils/prime-trust/type";

/**
 * Write account to database.
 * @param input
 * @returns AccountDocument
 */
export const createAccountService = async (input: IAccountAttributes) => {
  // return await AccountModel.create(input)
  try {
    const { data: newAccount } = await createAccount(input);

    console.log(newAccount);

    if (newAccount) {
      console.log({ newAccount });
      const account = await AccountModel.create({
        ...newAccount.data,
        account_id: newAccount.data.id,
      });
      console.log(account);
      return { account };
    } else {
      console.log("Account not created");
      throw new Error("Account not created");
      // return false;
    }
  } catch (e: any) {
    console.log("sse", e);
    throw e;
  }
};

/**
 * Find single account object from database.
 * @param query FilterQuery<IAccount>
 * @returns AccountDocument
 */
export const findOneAccount = async (accountID: string) => {
  const { data } = await getAccount(accountID);
  console.log(data);
  return data.data;
};

export const getAccountAssetsBalance = async (accountID: string) => {
  const { data } = await getAccountAssetTotals(accountID);

  return data.data;
};

/**
 * Find many account objects from database.
 * @param query FilterQuery<IAccount>
 * @returns AccountDocument[]
 */
export const findManyAccount = async (query: FilterQuery<IAccount>) => {
  return await AccountModel.find(query);
};

/**
 * It takes an account id and an amount, and then it calls the fundAccountSandbox function from the
 * accounts.accounts object, which is an axios instance.
 * @param {string} id - string
 * @param {number} amount - number
 */
export const fundAccountSandboxService = async (id: string, amount: number) => {
  try {
    const { data: account } = await fundAccountSandbox(id, amount);
    if (account) {
      console.log("funded account", account);
    } else {
      console.log("Funding not successful");
      throw new Error("Funding not successful");
    }
  } catch (e: any) {
    console.log("e", e.response.data);
    throw new Error(e.response.data);
  }
};

/**
 * It opens an account, updates the account status in the database, and returns the account
 * @param {string} id - string - the account id
 * @returns The account object is being returned.
 */
export const openAccountService = async (id: string) => {
  try {
    const { data: account } = await openAccount(id);
    if (account) {
      console.log("opened account", account);
      const updatedAccount = await AccountModel.findOneAndUpdate(
        { account_id: id },
        {
          $set: {
            status: account.data.status,
            "disbursements-frozen": account.data["disbursements-frozen"],
          },
        }
      );
      console.log(updatedAccount);
      return { account };
    } else {
      console.log("Account not opened");
      throw new Error("Account not opened");
      // return false;
    }
  } catch (e: any) {
    console.log("e", e.response.data);
    throw new Error(e.response.data);
  }
};

/**
 * Update single account in database..
 * @param query FilterQuery<IAccount>
 * @param update IAccount
 * @returns AccountDocument
 */
export const updateAccountService = async (
  query: FilterQuery<IAccount>,
  update: IAccount
) => {
  // const { data } = await updateAccount("query", update);
  return await AccountModel.findOneAndUpdate(query, { $set: update });
};

/**
 * It deletes an account from the database
 * @param query - FilterQuery<IAccount>
 * @returns The return value of the function is the result of the deleteOne() method.
 */
export const deleteAccount = async (query: FilterQuery<IAccount>) => {
  return await AccountModel.deleteOne(query);
};
