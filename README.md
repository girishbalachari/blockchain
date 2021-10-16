# blockchain
bitcoin blockchain

Please write your application using NodeJS module with the following interface.
Interface
1. init(initialBalances, transactions, blockSize) => A function that initializes the
blockchain.
2. getAccountBalance(accountIndex) => returns the account balance of a specific
account.

● initialBalances: An array of integers representing initial account state. For
example, [1, 2, 3] where account index 0 has a balance 1. Account index 1 has a
balance of 2

● transactions: An array of arrays of transactions. Each transaction is an array
itself in the following form: [fromAddress, toAddress, value]. For example, [[ 0, 3,
6]] where from account 0 transfers 6 value to account 3.

● blockSize: number of valid transactions in a block

Blocks
Blocks are encoded as strings of the form: "blockHash, prevBlockHash, nonce,
blockTransactions"

● blockHash: The blockhash is the returned value from hashing the inputs
hashFunction(“prevBlockHash, nonce, transactions”). See below for example 1.0

● prevBlockHash: The hash of the previous block.

● Nonce is lowest integer for which the first four characters of blockHash are equal
to 1234.

● blockTransactions: An array of transactions in a block encoded into string.

Condition of transaction validity
A transaction Ti is valid if the addressFrom has a balance >= value after processing all
transactions Tj for which j < i. Therefore some of the transactions may be invalid and
must be excluded from the blocks.

Example of input
init([100, 100, 500], [[0, 1, 50], [1, 2, 80], [2, 0, 450]], 2)
getAccountBalances(1)

