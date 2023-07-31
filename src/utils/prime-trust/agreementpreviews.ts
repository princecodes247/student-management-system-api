import api from "./config";
import { IAgreementPreviewAttributes } from "./type";

const servicePrefix = "/v2/agreement-previews";

export const createAgreementPreviews = (
  attributes: IAgreementPreviewAttributes
) => {
  return api.post(servicePrefix, {
    data: {
      type: "account",
      attributes,
    },
  });
};

const agreementPreviews = {
  createAgreementPreviews,
};

export default agreementPreviews;
