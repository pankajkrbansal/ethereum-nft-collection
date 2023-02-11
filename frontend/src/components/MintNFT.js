import React from "react";
// import Logout from "./Logout";
import { ethers } from "ethers";
// const ethers = require("ethers");
import epicNFT from '../utils/EpicNFT.json'

let MintNFT = (props) => {
  console.log(props);

  let mintNft = async () => {
    const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS
    try {
        const {ethereum} = window.ethereum;
        if(ethereum) {
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            const connectedContract = new ethers.Contract(CONTRACT_ADDRESS, epicNFT.abi, signer);
            let txnNFT = await connectedContract.createEpicNFT();
            await txnNFT.wait();
        }else{
            console.log("Ethereum Object Not Found");
        }
    }catch(err){
        console.log(err);
    }
}

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
      </div>
      {/* <Logout /> */}
    </div>
  );
};

export default MintNFT;
