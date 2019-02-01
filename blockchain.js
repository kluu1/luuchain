const Block = require('./block');
const cryptoHash = require('./crypto-hash');

class Blockchain {
  constructor() {
    this.chain = [Block.genesis()];
  }

  // Adds a new block to the end of the chain
  addBlock({ data }) {
    // Create a new block, passing in lastBlock and new data
    const newBlock = Block.mineBlock({
      lastBlock: this.chain[this.chain.length - 1],
      data
    });

    // Push the new block to the end of the chain
    this.chain.push(newBlock);
  }

  static isValidChain(chain) {
    // Check if first block in the chain is the genesis block
    if (JSON.stringify(chain[0]) !== JSON.stringify(Block.genesis()))
      return false;

    for (let i = 1; i < chain.length; i++) {
      const { timestamp, lastHash, hash, data } = chain[i];

      const actualLastHash = chain[i - 1].hash;

      if (lastHash !== actualLastHash) return false;

      const validatedHash = cryptoHash(timestamp, lastHash, data);

      if (hash !== validatedHash) return false;
    }

    return true;
  }
}

module.exports = Blockchain;
