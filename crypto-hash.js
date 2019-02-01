const crypto = require('crypto');

// Combine all arguments in the 'inputs' array
const cryptoHash = (...inputs) => {
  // Create local vairable to hold the hash
  const hash = crypto.createHash('sha256');

  // Sort and join inputs array into one string
  hash.update(inputs.sort().join(' '));

  // return the hex value of the hash
  return hash.digest('hex');
};

module.exports = cryptoHash;
