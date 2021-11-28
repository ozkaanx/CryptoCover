import React from "react";

function ExchangeRate(props) {
  return (
    <>
      <div className="excontainer">
        <h1>Exchange Rate</h1>
        <h2>{props.exchangeRate} One {props.secondaryCurrency}</h2>
      </div>
    </>
  );
}

export default ExchangeRate;
