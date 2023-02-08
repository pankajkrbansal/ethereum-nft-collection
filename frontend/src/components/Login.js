import React, { useState } from "react";
import "./login.css";

let Login = () => {
  const [isWalletConnected, setWalletConnected] = useState(false);
  const [account, setAccount] = useState(null);

  let checkAccount = async () => {
    let accounts = await window.ethereum.request({
      // returns array of accounts addresses
      method: "eth_accounts",
    });
    if (accounts.length > 0) {
      setAccount(accounts[0]);
    }
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
      cryptoAccount.length == 0 || cryptoAccount.length == undefined
        ? setWalletConnected(false)
        : setWalletConnected(true);
    }
    checkAccount();
  };

  if (isWalletConnected) {
    return (
      <div>
        <h2>Wallet Is Connected</h2>
      </div>
    );
  } else {
    return (
      <div>
        <button
          className="loginButton"
          onClick={() => {
            getWalletConnected();
          }}
        >
          Connect
        </button>
      </div>
    );
  }
};

export default Login;
