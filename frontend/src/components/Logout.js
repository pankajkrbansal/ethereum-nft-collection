import React from "react";
import { useWeb3React } from "@web3-react/core";
import "./logout.css";

let Logout = () => {
  const { deactivate } = useWeb3React();

  return (
    <div className="LogoutDiv">
      <button className="logoutButton" onClick={deactivate}>
        LogOut
      </button>
    </div>
  );
};

export default Logout;
