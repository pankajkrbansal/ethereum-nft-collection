# On-Chain NFT Minting Website

## About Our Epic NFT Contract

The contract is called "EpicNFT" and it is an ERC721 non-fungible token that extends the ERC721URIStorage contract from OpenZeppelin. It imports the Base64 library for encoding SVG data, and the Counters library for keeping track of the number of tokens minted.

The contract has a constructor that initializes the name and symbol of the NFT to "EpicNFT" and "ENFT", respectively.

The createEpicNFT function is the main function of the contract, which mints a new NFT and assigns it to the user who calls the function. It first generates three random words by calling pickRandomFirstWord, pickRandomSecondWord, and pickRandomThirdWord functions, and concatenates them to create a unique word. It then generates an SVG image using the concatenated word and encodes it in base64 format. Next, it generates a JSON metadata string that includes the name, description, and image of the NFT, and encodes it in base64 format. Finally, it uses the _safeMint function to mint the NFT and assigns the generated JSON metadata to it.

The pickRandomFirstWord, pickRandomSecondWord, and pickRandomThirdWord functions use a random number generator to pick a random word from each of the three arrays of words.

The random function is an internal function that generates a random number using the keccak256 hash function.

The tokenURI function is commented out and not used in the contract. It is a standard function from the ERC721URIStorage contract that returns the metadata of the NFT.


## How To Start Minting NFT

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