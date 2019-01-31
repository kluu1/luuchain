const { GENESIS_DATA } = require('./config');

class Block {
  // Wrapped {} around args, so you don't have to worry
  // about arg orders later on when creating new blocks
  constructor({ timestamp, lastHash, hash, data }) {
    this.timestamp = timestamp;
    this.lastHash = lastHash;
    this.hash = hash;
    this.data = data;
  }

  static genesis() {
    return new this(GENESIS_DATA);
  }
}

module.exports = Block;
