# luuchain

## Notes
* The very first block in the blockchain is called the Genesis block
* All new blocks will have reference to the last hash of the last block, creating a chain, hence "blockchain"
* A block has (can have more) of the following properties: timestamp, lasthash, hash, data, nonce, and difficulty
* The difficulty to mine a block rises as more miners are added to the network and more computational power is devoted to the system. 
* The "difficulty" settings keeps the rate of blocks being added to the blockchain at a steady rate (eg. 10 minutes to mine a block)
* A "nonce" is used to make difficult to generate a valid hash for a given block, as miners must find a nonce value that,when plugged into the hashing algorithm, generates an output that meets certain requirements (a certain number of leading zeros).
