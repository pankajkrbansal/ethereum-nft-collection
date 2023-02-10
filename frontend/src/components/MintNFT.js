import React from "react";
import Logout from "./Logout";

let MintNFT = (props) => {
    console.log(props);
    return(
        <div>
            <h2>
                Welcome To NFT Minting
            </h2>
            <div>
                <button onClick={() => { console.log("MintNFT"); }} className="loginButton">Click To Generate NFT</button>
            </div>
            <Logout/>
        </div>
    );
}

export default MintNFT;