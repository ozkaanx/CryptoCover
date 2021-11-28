import axios from "axios";
import React, { useState } from "react";
import { IoLogoUsd } from "react-icons/io";

function CoverButton(props) {
  const firstCurrency = props.primaryCurrency;
  const lastCurrency = props.secondaryCurrency;

  async function convert() {
    await axios
      .get(
        `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${firstCurrency}&to_currency=${lastCurrency}&apikey=${process.env.NEXT_RAPID_API_KEY}`
      )
      .then((response) => {
        props.setResult(
          response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"] *
            props.amount
        );
        props.setExchangeRate(
          response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]
        );
      });
  }

  return (
    <div className="coverbutton">
      <button id="covertBtn" onClick={convert}>
        <span> Covert</span>
        <IoLogoUsd />
      </button>
    </div>
  );
}

export default CoverButton;
