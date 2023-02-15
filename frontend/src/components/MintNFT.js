import React from "react";
import { ethers } from "ethers";
import epicNFT from "../utils/EpicNFT.json";
import "./mintnft.css";
import Logout from "./Logout";

let MintNFT = (props) => {
  console.log(props);

  const { ethereum } = window;
  const CONTRACT_ADDRESS = "0xe5767fc3e4A8eD4721418e761c5388b045f44C2d";
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const connectedContract = new ethers.Contract(
    CONTRACT_ADDRESS,
    epicNFT.abi,
    signer
  );

    connectedContract.on('MintNFT', (from, tokenID) => {
      console.log(`from = ${from}\n tokenId = ${tokenID}`);
      alert(`Hey there! We've minted your NFT. It may be blank right now. It can take a max of 10 min to show up on OpenSea. Here's the link: <https://testnets.opensea.io/assets/goerli/${CONTRACT_ADDRESS}/${tokenID.toNumber()}>`)
    });
    
  let mintNft = async () => {
    
    console.log(CONTRACT_ADDRESS);
    try {
        let txnNFT = await connectedContract.createEpicNFT();
        await txnNFT.wait();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h2>Welcome To NFT Minting</h2>
      <div>
        <button
          onClick={() => {
            mintNft();
          }}
          className="mintButton"
        >
          Click To Generate NFT
        </button>
        {/* <Logout/> */}
      </div>
    </div>
  );
};

export default MintNFT;
