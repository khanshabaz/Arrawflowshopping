import React from "react";
import BagSummary from "../components/BagSummary";
import BagItem from "../components/BagItem";

function Bags() {
  return (
    <main>
    <div className="bag-page">
      <div className="bag-items-container">
        <BagItem/>
      </div>
      <BagSummary />
    </div>
    </main>
  );
}

export default Bags;
