class Block {
  // Wrapped {} around args, so you don't have to worry
  // about arg orders later on when creating new blocks
  constructor({ timestamp, lastHash, hash, data }) {
    this.timestamp = timestamp;
    this.lastHash = lastHash;
    this.hash = hash;
    this.data = data;
  }
}

const block1 = new Block({
  data: 'foo-data',
  lastHash: 'foo-lastHash',
  hash: 'foo-hash',
  timestamp: '01/01/01'
});

console.log('block1', block1);
