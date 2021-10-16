const Blockchain = require("./blockchain");
const bitcoin = new Blockchain();

const bc1 = {
  chain: [
    {
      index: 1,
      timestamp: "10/16/2021, 12:19:27 PM",
      transactions: [],
      nonce: 100,
      hash: "0",
      previousBlockHash: "0",
    },
    {
      index: 2,
      timestamp: "10/16/2021, 12:21:27 PM",
      transactions: [],
      nonce: 3509,
      hash: "12340a8eebd13de71edf666fafdf92956bb0a590",
      previousBlockHash: "0",
    },
    {
      index: 3,
      timestamp: "10/16/2021, 12:25:30 PM",
      transactions: [
        {
          amount: 100,
          sender: "100",
          recipient: "500",
        },
      ],
      nonce: 28647,
      hash: "12343a4bc9ea7d6fd51ff5e50d9f887a8f637732",
      previousBlockHash: "12340a8eebd13de71edf666fafdf92956bb0a590",
    },
    {
      index: 4,
      timestamp: "10/16/2021, 12:28:33 PM",
      transactions: [
        {
          amount: 0,
          sender: "1",
          recipient: "50",
        },
      ],
      nonce: 41287,
      hash: "123428a701bdd6334df3d8469ce8417249e268ff",
      previousBlockHash: "12343a4bc9ea7d6fd51ff5e50d9f887a8f637732",
    },
    {
      index: 5,
      timestamp: "10/16/2021, 12:29:39 PM",
      transactions: [
        {
          amount: 1,
          sender: "2",
          recipient: "80",
        },
      ],
      nonce: 7064,
      hash: "1234a98e8e5e2a05622ea6f7772f10ed0145c2f5",
      previousBlockHash: "123428a701bdd6334df3d8469ce8417249e268ff",
    },
    {
      index: 6,
      timestamp: "10/16/2021, 12:31:03 PM",
      transactions: [
        {
          amount: 2,
          sender: "0",
          recipient: "450",
        },
      ],
      nonce: 37924,
      hash: "12340fefddcb0928fc0a15a487aee1834ca0159e",
      previousBlockHash: "1234a98e8e5e2a05622ea6f7772f10ed0145c2f5",
    },
  ],
  pendingTransactions: [],
};

console.log("VALID: ", bitcoin.chainIsValid(bc1.chain));
