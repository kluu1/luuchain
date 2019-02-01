const Block = require('./block');

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
}

module.exports = Blockchain;
