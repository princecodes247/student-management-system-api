import api from "./config";

const servicePrefix = "/v2/users";

const getUsers = () => {
  return api.get(servicePrefix);
};

const createNewUser = (attributes: {
  name: string;
  email: string;
  password: string;
}) => {
  return api.post(servicePrefix, { data: { type: "users", attributes } });
};

const getUser = (userID: string) => {
  return api.get(servicePrefix + "/" + userID);
};

const updateUser = (userID: string, name: string) => {
  return api.patch(servicePrefix + "/" + userID, {
    data: {
      type: "user",
      attributes: {
        "user-id": userID,
        name,
      },
    },
  });
};

const getCurrentUser = () => {
  return api.get(servicePrefix + "/current");
};

const invalidateCurrentUserJWT = () => {
  return api.post(servicePrefix + "/current/jwts/invalidate-jwt");
};

const invalidateJWT = (userID: string) => {
  return api.post(servicePrefix + userID + "/jwts/invalidate");
};

const validateCurrentUserPassword = () => {
  return api.post(servicePrefix + "/current/password");
};

const updatePassword = (
  userID: string,
  currentPassword: string,
  password: string
) => {
  return api.post(servicePrefix + userID + "/password", {
    data: {
      type: "users",
      attributes: {
        "current-password": currentPassword,
        password,
      },
    },
  });
};

const activateCurrentUserTOTP = (otp: string) => {
  return api.post(servicePrefix + "/current/totp/activate", {
    data: {
      type: "users",
      attributes: {
        otp,
      },
    },
  });
};

const activateTOTP = (userID: string, otp: string) => {
  return api.post(servicePrefix + userID + "/totp/activate", {
    data: {
      type: "users",
      attributes: {
        otp,
      },
    },
  });
};

const submitCurrentUserTOTP = (data = {}) => {
  return api.post(servicePrefix + "/current/totp/submit", data);
};

const submitTOTP = (userID: string, data = {}) => {
  return api.post(servicePrefix + userID + "/totp/submit", data);
};

const users = {
  getUsers,
  createNewUser,
  getUser,
  updateUser,
  getCurrentUser,
  invalidateCurrentUserJWT,
  invalidateJWT,
  validateCurrentUserPassword,
  updatePassword,
  activateCurrentUserTOTP,
  activateTOTP,
  submitCurrentUserTOTP,
  submitTOTP,
};
export {
  getUsers,
  createNewUser,
  getUser,
  updateUser,
  getCurrentUser,
  invalidateCurrentUserJWT,
  invalidateJWT,
  validateCurrentUserPassword,
  updatePassword,
  activateCurrentUserTOTP,
  activateTOTP,
  submitCurrentUserTOTP,
  submitTOTP,
};

export default users;
