export enum RequestDataType {
  "contacts" = "contacts",
  "user" = "user",
  "userInvitation" = "user-invitation",
  "agreementPreviews" = "agreement-previews",
  "account" = "account",
  "webhookConfigs" = "webhook-configs",
}

export enum SexType {
  "male" = "male",
  "female" = "female",
}

export enum ContactType {
  "naturalPerson" = "natural_person",
  "legalEntity" = "legal_entity",
}

export enum AccountType {
  "individual" = "individual",
  "corporate" = "corporate",
  "iraTrust" = "ira_trust",
  "custodial" = "custodial",
}

export enum PermissionType {
  "read" = "read",
  "write" = "write",
}

export interface IPhoneNumber {
  country: string;
  number: string;
  sms: boolean;
}

export interface IAddress {
  "street-1": string;
  "street-2": string;
  "postal-code": string;
  city: string;
  region: string;
  country: string;
}

export interface IRequestData {
  data: {
    type: RequestDataType;
    // attributes is an object with a different structure depending on the type
    attributes: any;
  };
}
export interface IUserInvitationsAttributes {
  email: string;
  message: string;
  name: string;
  "resource-id": string;
  "resource-type": string;
  permissions: Array<PermissionType>;
}

export interface IContact {
  "contact-type": ContactType;
  name: string;
  email: string;
  sex: SexType;
  "date-of-birth": string;
  "tax-country": string;
  "tax-id-number": string;
  "primary-address": IAddress;
  "primary-phone-number": IPhoneNumber;
}

export interface IContactAttributes extends IContact {
  "account-id": string;
}

export interface IAccountAttributes {
  "account-type": AccountType;
  name: string;
  "authorized-signature": string;
  owner: {
    geolocation: string;
    "ip-address": string;
  } & IContact;
}

export interface IAgreementPreviewAttributes
  extends Omit<IAccountAttributes, "owner"> {
  beneficiary?: IContact;
  owner: {
    "relationship-to-beneficiary"?: string;
  } & IContact;
}

export interface IAssetAttributes {
  "unit-count": string;
  "asset-id": string;
  "from-account-id": string;
  "to-account-id": string;
  reference: string;
}

export interface IAssetTransferMethodAttributes {
  label: string;
  "asset-id": string;
  "contact-id": string;
  "account-id": string;
  tag?: string;
  "wallet-address"?: string;
  "transfer-direction"?: string;
  "single-use"?: boolean;
  "asset-transfer-type": string;
  "cost-basis": string;
  "acquisition-on": string;
  "currency-type": string;
  "force-new-vault-creation": boolean;
}

export interface IAssetContributionAttributes {
  "asset-id": string;
  "contact-id": string;
  "account-id": string;
  "cost-basis": string;
  "acquisition-on": string;
  "currency-type": string;
  "unit-count": string;
  "asset-transfer-method-id": string;
}

export interface IAssetDisbursementAttributes {
  "asset-id": string;
  "contact-id": string;
  "account-id": string;
  "unit-count": string;
  "asset-transfer-method-id": string;
  "asset-transfer": {
    "asset-transfer-method-id": string;
  };
}

export interface IUploadedDocumentAttributes {
  "contact-id": string;
  "uploaded-document-id": string;
  "backside-document-id": string;
  "expires-on": string;
  identity: boolean;
  "identity-photo": boolean;
  "proof-of-address": boolean;
  "kyc-document-country": string;
  "kyc-document-type": string;
}

export interface ITradeData {
  "account-id": string;
  amount: string;
  "asset-id": string;
  "market-value-amount": string;
}

export interface IQuotesData {
  "account-id": string;
  "asset-id": string;
  hot: boolean;
  "transaction-type": string;
  amount: string;
}
