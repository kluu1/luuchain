const { GENESIS_DATA } = require('./config');
const cryptoHash = require('./crypto-hash');

class Block {
  // Properties of a Block
  constructor({ timestamp, lastHash, hash, data }) {
    this.timestamp = timestamp;
    this.lastHash = lastHash;
    this.hash = hash;
    this.data = data;
  }

  // Method to create a genesis block
  static genesis() {
    return new this(GENESIS_DATA);
  }

  // Method to create a new block
  static mineBlock({ lastBlock, data }) {
    const timestamp = Date.now();
    const lastHash = lastBlock.hash;

    return new this({
      timestamp,
      lastHash,
      data,
      hash: cryptoHash(timestamp, lastHash, data)
    });
  }
}

module.exports = Block;
