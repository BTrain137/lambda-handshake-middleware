const crypto = require("crypto");
const { Buffer } = require("buffer");
const { privateKeyString, publicKeyString } = require("./keys");

exports.handler = async (event) => {
  const { body } = event;

  const privateKey = crypto.createPrivateKey(privateKeyString);
  const publicKey = crypto.createPublicKey(publicKeyString);

  const keypair = { privateKey, publicKey };

  const signature = crypto.sign(null, Buffer.from(body), keypair.privateKey);
  const signatureBase64 = signature.toString("base64");

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      signatureBase64,
      body,
    }),
  };

  return response;
};
