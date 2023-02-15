// import React from "react";
import "./logout.css";
import React, { useState } from "react";

let Logout = () => {
  // const { deactivate } = useWeb3React();

  const [isConnected, setIsConnected] = useState(false);

  const disconnectFromMetamask = async () => {
    try {
      // Disconnect from Metamask
      await window.ethereum.request({
        method: "wallet_requestPermissions",
        params: [{ eth_accounts: {} }],
      });
      setIsConnected(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="LogoutDiv">
      <button className="logoutButton" onClick={disconnectFromMetamask}>
        LogOut
      </button>
    </div>
  );
};

export default Logout;
