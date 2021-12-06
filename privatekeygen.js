/**
 * Creates ED25519 Private Key Public Key pair
 * Requires: NodeJS >= 12.x
 */
 const crypto = require('crypto');

 console.log('crypto is supported');
 
 const format = 'pem'; // 'jwk' // 'der'
 const publicKeyOptions = {format: format, type: 'spki'} ;
 const privateKeyOptions = {format: format, type: 'pkcs8'} ;
 
 keypair = crypto.generateKeyPairSync("ed25519");
 
 console.log("Public Key\n", keypair.publicKey.export(publicKeyOptions));
 console.log("Private Key\n", keypair.privateKey.export(privateKeyOptions));

