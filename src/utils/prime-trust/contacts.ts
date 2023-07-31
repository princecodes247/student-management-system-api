import api from "./config";
import { IContactAttributes } from "./type";

const servicePrefix = "/v2/contacts";

const getContacts = () => {
  return api.get(servicePrefix);
};

const createContacts = (attributes: IContactAttributes) => {
  console.log("bruv")
  return api.post(servicePrefix, {
    data: { type: "contacts", attributes },
  });
};

// const getContact = (contactId: string) => {
//   return api.get(servicePrefix + "/" + contactId);
// };

const getContact = (contactId: string) => { 
  return api.get(servicePrefix + `?account.id=${contactId}`);
};

const updateContact = (
  contactId: string,
  sandboxMode: boolean = false,
  data: any
) => {
  return api.patch(
    `${servicePrefix}/${contactId}${sandboxMode ? "/sandbox" : ""}`,
    data
  );
};

const deleteContact = (contactId: string) => {
  return api.delete(servicePrefix + "/" + contactId);
};

const getRelatedFromContacts = (contactId: string) => {
  return api.get(servicePrefix + "/" + contactId + "/related-from-contacts");
};

const getRelatedToContacts = (contactId: string) => {
  return api.get(servicePrefix + "/" + contactId + "/related-to-contacts");
};

const contacts = {
  getContacts,
  createContacts,
  getContact,
  updateContact,
  deleteContact,
  getRelatedFromContacts,
  getRelatedToContacts,
};

export {
  getContacts,
  createContacts,
  getContact,
  updateContact,
  deleteContact,
  getRelatedFromContacts,
  getRelatedToContacts,
};

export default contacts;
