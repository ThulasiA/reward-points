import React from "react";
import Transactions from "./RewardPoints/Transactions";
import Customer from "./RewardPoints/Customer";

function Home() {
  return (
    <>
      <h3>Reward Points</h3>
      <Customer />
      <Transactions />
    </>
  );
}

export default Home;
