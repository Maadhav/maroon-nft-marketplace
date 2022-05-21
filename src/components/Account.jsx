import React from "react";
import { useMoralis } from "react-moralis";
import connectors from "./connectors";
const styles = {
  account: {
    height: "42px",
    padding: "0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "42px",
    borderRadius: "12px",
    backgroundColor: "rgb(244, 244, 244)",
    cursor: "pointer",
  },
};
const Account = () => {
  const { authenticate, account, logout, isAuthenticated } = useMoralis();

  function createConnectHandler() {
    return async () => {
      try {
        const connector = connectors["uauth"];
        console.log(connector);
        await authenticate(connector);
      } catch (error) {
        console.error(error);
      }
    };
  }

  async function handleDisconnect() {
    try {
      logout();
    } catch (error) {
      console.error(error);
    }
  }

  if (isAuthenticated) {
    return (
      <>
        <button onClick={handleDisconnect}>Disconnect</button>
      </>
    );
  }

  return (
    <div style={styles.account}>
      <img
        src="https://docs.unstoppabledomains.com/images/hover-icon.png"
        onClick={createConnectHandler()}
      />
    </div>
  );
};

export default Account;
