import axios from "axios";
import FormData from "form-data";
import { createReadStream } from "fs";
import api from "./config";
import {
  IAgreementPreviewAttributes,
  IUploadedDocumentAttributes,
} from "./type";

const cipChecksPrefix = "/v2/cip-checks";
const amlChecksPrefix = "/v2/aml-checks";
const uploadedDocumentsPrefix = "/v2/uploaded-documents";
const kycDocumentChecksPrefix = "/v2/kyc-document-checks";

//cip-checks

export const getCIPChecks = (contactId: string) => {
  return api.get(cipChecksPrefix + `?contact.id=${contactId}`);
};

export const getCIPCheck = (cipCheckId: string) => {
  return api.get(cipChecksPrefix + "/" + cipCheckId);
};

export const submitCIP = (cipCheckId: string) => {
  return api.post(cipChecksPrefix + "/" + cipCheckId + "/submit-for-review");
};

export const approveCIPCheckSandbox = (cipCheckId: string) => {
  return api.post(cipChecksPrefix + "/" + cipCheckId + "/sandbox/approve");
};

export const denyCIPCheckSandbox = (cipCheckId: string) => {
  return api.post(cipChecksPrefix + "/" + cipCheckId + "/sandbox/deny");
};

//aml-checks

export const getAllAMLChecks = () => {
  return api.get(amlChecksPrefix + "/");
};

export const getAMLChecks = (amlCheckId: string) => {
  return api.get(amlChecksPrefix + "/" + amlCheckId);
};

export const approveAMLCheckSandbox = (amlCheckId: string) => {
  return api.post(amlChecksPrefix + "/" + amlCheckId + "/sandbox/approve");
};

export const denyAMLSandbox = (amlCheckId: string) => {
  return api.post(amlChecksPrefix + "/" + amlCheckId + "/sandbox/deny");
};

//uploaded-documents

export const getDocuments = () => {
  return api.get(uploadedDocumentsPrefix);
};

export const uploadDocument = ({
  label,
  file,
  contactId,
}: {
  label: string;
  file: any;
  contactId: string;
}) => {
  // console.log("upload");
  let data = new FormData();
  // "7ae9525b-4127-48e8-a089-80199b0383cd"
  data.append("contact-id", contactId);
  data.append("public", "true");
  data.append("description", "Front of Driver's License");
  data.append("file", file);
  data.append("label", label);

  // console.log(formData);
  try {
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://sandbox.primetrust.com/v2/uploaded-documents",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJSUzI1NiJ9.eyJhdXRoX3NlY3JldCI6ImI3ZTVlODAxLTkyMDgtNGVmZS05NzE5LWJlZTViY2Y0MDE3NSIsInVzZXJfZ3JvdXBzIjpbXSwibm93IjoxNjc3MTg1MTM1LCJleHAiOjE2Nzc3ODk5MzV9.aKqwMlWlSMIOQ7CS-jIs8q8NqHxhvdXjGZb7rhcVKo5EsSiZVMLmhqErc1d49fAV4qVmWzGOpNnEFDE3CUY-f8dKRVrc0TGJAxSqTI-FRsljClbvlCvzb7U6rg75TMAdtmyKV1klhPaWBCfxpjzjV_rmkbaNJSXLnLTrUXh5DuFDqwIWh0_pQt42CRgaEtH0u4JQNIppxVsgOFkSP4m_8toZFe98G1M2QRd20GXyj0ko0cHs7VCwNQoOm6i50JvxfvaXbo0oT78cWUiUa2NTHHJybHTRDoqnYYCTVmoh5cb1mcITx_VmW-vnwYj2TzdjJ3cZsn3VkI1b8V-xn9a23w",
        ...data.getHeaders(),
      },
      data: data,
    };

    return axios(config);
    // .then(function (response) {
    //   console.log(JSON.stringify(response.data));
    // })
    // .catch(function (error) {
    //   console.log(Object.keys(error));
    //   console.log(error.response.data.errors);
    // });

    // return
    //  api.post(uploadedDocumentsPrefix, formData, {
    //   headers: {
    // "Content-Type": "multipart/form-data",
    //     ...formData.getHeaders(),
    //   },
    // })
  } catch (error: any) {
    console.error(error.response);
    console.log("keys", Object.keys(error));
    throw new Error(error.response.data.errors);
  }
};

// kyc-document-checks

export const getKycDocumentChecks = () => {
  return api.get(kycDocumentChecksPrefix + "/");
};

export const initiateKycDocumentCheck = (
  attributes: IUploadedDocumentAttributes
) => {
  return api.post(kycDocumentChecksPrefix, {
    data: {
      type: "kyc-document-checks",
      attributes,
    },
  });
};

export const getKycDocumentCheck = (kycDocumentCheckId: string) => {
  return api.get(kycDocumentChecksPrefix + "/" + kycDocumentCheckId);
};

export const getPendingKycDocumentCheck = () => {
  return api.get(kycDocumentChecksPrefix + "/pending-by-priority");
};

export const failPendingKycDocumentCheckSandbox = (
  kycDocumentCheckId: string
) => {
  return api.get(
    kycDocumentChecksPrefix + "/" + kycDocumentCheckId + "/sandbox/fail"
  );
};

export const verifyPendingKycDocumentCheckSandbox = (
  kycDocumentCheckId: string
) => {
  return api.get(
    kycDocumentChecksPrefix + "/" + kycDocumentCheckId + "/sandbox/verify"
  );
};

const kycs = {
  getCIPChecks,
  getCIPCheck,
  submitCIP,
  approveCIPCheckSandbox,
  denyCIPCheckSandbox,
  getDocuments,
  uploadDocument,
  getKycDocumentChecks,
  initiateKycDocumentCheck,
  getKycDocumentCheck,
  getPendingKycDocumentCheck,
  failPendingKycDocumentCheckSandbox,
  verifyPendingKycDocumentCheckSandbox,
  approveAMLCheckSandbox,
  denyAMLSandbox,
};

export default kycs;
