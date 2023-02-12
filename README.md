
# On-Chain NFT Minting Website

This website accomplishes the task to generate random NFT's using svg & storing the JSON metadata in base64 format with token URI. The NFT's generated works on **Goerli Test Network** only & can be seen on OpenSea Test Network.

The NFT Smart Contract uses ERC-721URIStorage as standard. The contract address is **0xe5767fc3e4A8eD4721418e761c5388b045f44C2d**.

The frontend is created using React.js. To start the frontend follow the below steps

```
cd frontend
npm start
```

After the project is started, connect your wallet & then you would be able to generate the NFT. After NFT is successfully generated, there will be an alert box with the link to OpenSea for your NFT.

## Project Tech Stack
- Hardhat
- Solidity
- React.js
- web3 library
- ethers library