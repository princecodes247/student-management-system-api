import { KYCModel } from "../model";
import { IKYC } from "../type";
import { omit } from "lodash";
import { createReadStream } from "fs";

export const getCIPChecksService = async (contactID: string) => {
  return await getCIPChecks(contactID);
};

export const getAMLChecksService = async (contactID: string) => {
  return await getCIPChecks(contactID);
};

export const submitCIPService = async (id: string) => {
  try {
    const { data: account } = await submitCIP(id);
    if (account) {
      console.log("opened account", account);
      const updatedKYC = await KYCModel.findOneAndUpdate(
        { account_id: id },
        {
          $set: {
            status: account.data.status,
            "disbursements-frozen": account.data["disbursements-frozen"],
          },
        }
      );
      console.log(updatedKYC);
      return { account };
    } else {
      console.log("KYC not opened");
      throw new Error("KYC not opened");
      // return false;
    }
  } catch (e: any) {
    console.log("e", e.response.data);
    throw new Error(e.response.data);
  }
};
export const approveCIPCheckService = async (id: string) => {
  try {
    const { data: account } = await approveCIPCheckSandbox(id);
    if (account) {
      console.log("opened account", account);
      return { account };
    } else {
      console.log("KYC not opened");
      throw new Error("KYC not opened");
      // return false;
    }
  } catch (e: any) {
    console.log("e", e.response.data);
    throw new Error(e.response.data);
  }
};
export const approveAMLCheckService = async (id: string) => {
  try {
    const { data: account } = await approveAMLCheckSandbox(id);
    if (account) {
      console.log("opened account", account);
      return { account };
    } else {
      console.log("KYC not opened");
      throw new Error("KYC not opened");
      // return false;
    }
  } catch (e: any) {
    console.log("e", e.response.data);
    throw new Error(e.response.data);
  }
};

// approveAMLSandbox;

export const uploadDocumentService = async (
  label: string,
  file: any,
  contactId: string
) => {
  // Read file content
  const fileContent = createReadStream(file.path);
  return await uploadDocument({ label, file: fileContent, contactId });
};

export const documentChecksService = async (id: string) => {
  // Read file content
  // const fileContent = readFileSync(file.path);
  // return await initiateKycDocumentCheck();
};
