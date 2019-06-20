const Block = require('./block');
const cryptoHash = require('../util/crypto-hash');

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

  replaceChain(chain) {
    // If incoming chain is not longer, then return
    if (chain.length <= this.chain.length) {
      console.error('The incoming chain must be longer');
      return;
    }

    // If incoming chain is not valid, then return
    if (!Blockchain.isValidChain(chain)) {
      console.error('The incoming chain must be valid');
      return;
    }

    // If incoming chain is longer and valid, replace chain
    console.log('replacing chain with', chain);
    this.chain = chain;
  }

  static isValidChain(chain) {
    // Check if first block in the chain is the genesis block
    if (JSON.stringify(chain[0]) !== JSON.stringify(Block.genesis()))
      return false;

    for (let i = 1; i < chain.length; i++) {
      const { timestamp, lastHash, hash, data, nonce, difficulty } = chain[i];

      // Validates the last hash is correct
      const actualLastHash = chain[i - 1].hash;

      const lastDifficulty = chain[i-1].difficulty;

      if (lastHash !== actualLastHash) return false;

      // Validates the hash
      const validatedHash = cryptoHash(
        timestamp,
        lastHash,
        data,
        nonce,
        difficulty
      );

      if (hash !== validatedHash) return false;

      if (Math.abs(lastDifficulty - difficulty) > 1) return false;
    }

    return true;
  }
}

module.exports = Blockchain;
