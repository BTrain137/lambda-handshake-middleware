const crypto = require("crypto");

console.log("crypto is supported");
console.log("\n\n 1(alternate)......   READ A Public Key  + A Private Key");

const privateKeyString = undefined; // "-----BEGIN PRIVATE KEY-----\ntest\n-----END PRIVATE KEY-----";
const publicKeyString = undefined; //"-----BEGIN PUBLIC KEY-----\ntest\n-----END PUBLIC KEY-----";

const privateKey = crypto.createPrivateKey(privateKeyString);
const publicKey = crypto.createPublicKey(publicKeyString);

keypair = { privateKey, publicKey };

const messageObjecct = {
  objectkey: "objectvalue",
  objectanotherkey: 123,
};

const message = JSON.stringify(messageObjecct);

const signature = crypto.sign(null, Buffer.from(message), keypair.privateKey);

const signatureBase64 = signature.toString("base64");

console.log("\n\n 3......  Verify a message");
const decodedSignature = Buffer.from(signatureBase64, "base64");

const verified = crypto.verify(
  null,
  Buffer.from(message),
  keypair.publicKey,
  decodedSignature
);
console.log(`Match is : ${verified}`);
