export default {
  port: process.env.PORT || 3122,
  dbUri: "mongodb://127.0.0.1:27017/nyx-primetrust",
  saltWorkFactor: 10,
  accessTokenTtl: "15m",
  refreshTokenTtl: "1y",
  accessTokenPrivateKey: ``,
  accessTokenPublicKey: ``,
  refreshTokenPrivateKey: ``,
  refreshTokenPublicKey: ``,
};
