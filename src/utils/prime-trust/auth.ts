import api from "./config";

const servicePrefix = "/auth";

const getCurrent = () => {
  return api.get(servicePrefix + "current");
};

const createJWT = () => {
  return api.post(servicePrefix + "jwts", {}, {});
};

const invalidateSessions = (data = {}) => {
  return api.post(servicePrefix + "jwts/invalidate-session", data);
};

const resetPassword = (data = {}) => {
  return api.post(servicePrefix + "password_reset", data);
};

const updatePassword = (hash: string, data = {}) => {
  return api.patch(servicePrefix + "password_reset/" + hash, data);
};

const auth = {
  getCurrent,
  createJWT,
  invalidateSessions,
  resetPassword,
  updatePassword,
};

export {
  getCurrent,
  createJWT,
  invalidateSessions,
  resetPassword,
  updatePassword,
};
export default auth;
