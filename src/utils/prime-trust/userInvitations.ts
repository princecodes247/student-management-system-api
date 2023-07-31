import api from "./config";
import { IUserInvitationsAttributes, RequestDataType } from "./type";

const servicePrefix = "/api/v2/user-invitations";

const getUserInvitations = () => {
  return api.get(servicePrefix + "/");
};

const createUserInvitations = (attributes: IUserInvitationsAttributes) => {
  return api.post(servicePrefix + "/", {
    data: { type: RequestDataType.userInvitation, attributes },
  });
};

const getUserInvitation = (
  userInvitationID: string,
  sandboxMode: boolean = false
) => {
  return api.get(
    servicePrefix + "/" + userInvitationID + sandboxMode && "/sandbox"
  );
};

const cancelUserInvitation = (userInvitationID: string) => {
  return api.delete(servicePrefix + "/" + userInvitationID);
};

const userInvitations = {
  cancelUserInvitation,
  createUserInvitations,
  getUserInvitation,
  getUserInvitations,
};

export {
  cancelUserInvitation,
  createUserInvitations,
  getUserInvitation,
  getUserInvitations,
};

export default userInvitations;
