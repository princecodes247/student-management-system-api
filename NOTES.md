yarn add express zod config cors express mongoose pino pino-pretty dayjs bcrypt jsonwebtoken lodash nanoid

yarn add @types/body-parser @types/config @types/cors @types/express @types/node @types/pino @types/bcrypt @types/jsonwebtoken @types/lodash @types/nanoid ts-node-dev typescript -D

## USER Flow

- An account will be created for each user (not a user)
- After the account is created, the KYC process will be started
  - First, We'd create a contact for the account
  - We upload the KYC documents
  - We'd create a KYC Check request for the contact
