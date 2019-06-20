const Wallet = require('./index');

describe('Wallet', () => {
  let wallet;

  beforeEach(() => {
    wallet = new Wallet();
  });

  it('it has a `balance`', () => {
    expect(wallet).toHaveProperty('balance');
  });

  it('it has a `publicKey`', () => {
    expect(wallet).toHaveProperty('publicKey');
  });
});
