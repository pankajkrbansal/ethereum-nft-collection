import React, { useState } from "react";
import "./login.css";
import MintNFT from "./MintNFT";

let Login = () => {
  const [isWalletConnected, setWalletConnected] = useState(false);
  const [walletAddr, setWalletAddr] = useState(null);

  // const Injected = new InjectedConnector({
  //   supportedChainIds: [1, 2, 3, 4, 5, 42],
  // });
  // const { active, chainId, account, activate } = useWeb3React();
  // console.log("active = ",active);
  // console.log("account = ", account);
  // useEffect(()=>{
  //   // to check if metamask is disconnected from website
  //   const checkForAccountConnected = async() => {
  //     let account = await window.ethereum.request({
  //       method:'eth_requestAccounts'
  //     });
  //     console.log("UseEffect Hook\n account = ", account);
  //     account.length == 0 ? setWalletConnected(false) : setWalletConnected(true)
  //   };
  //   checkForAccountConnected()
  // },[account]);

  let checkAccount = async () => {
    let accounts = await window.ethereum.request({
      // returns array of accounts addresses
      method: "eth_accounts",
    });
    if (accounts.length > 0) {
      setWalletAddr(accounts[0]);
    }
    console.log(walletAddr);
  };

  let getWalletConnected = async () => {
    const { ethereum } = window;
    // check for ethereum
    if (!ethereum) {
      alert("Install Metamask");
    }
    // take crypto account out from ethereum object
    let cryptoAccount = await ethereum.request({
      method: "eth_requestAccounts",
    });
    {
      cryptoAccount.length == 0 || cryptoAccount.length == undefined ?
         setWalletConnected(false)
        : setWalletConnected(true);
    }
    checkAccount();
  };

  // let connectWallet = async() => {
  //   activate(Injected);
  //   // setWalletAddr()
  //   active ? setWalletConnected(true) : setWalletConnected(false)
  //   console.log("wallet connected",isWalletConnected);
  // }

  if (isWalletConnected) {
    return (
      <div>
        {/* <h2>Wallet Is Connected</h2> */}
        <MintNFT name="pkb" walletAddr />
      </div>
    );
  } else {
    return (
      <div>
        <h1>To Create Your NFT Login With MetaMask Wallet</h1>
        <button
          className="loginButton"
          onClick={() => {
            getWalletConnected();
          }}
        >
          Connect
        </button>

        {/* <button
          className="loginButton"
          onClick={() => {
            connectWallet()
          }}
        >
          Connect2
        </button> */}
      </div>
    );
  }
};

export default Login;
