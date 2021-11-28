import React, { useState } from "react";
import ExchangeRate from "../ExchangeRate/ExchangeRate";
import CoverTable from "./CoverTable";

function CoverCrypto() {
  const currencies = ["BTC", "ETH", "USD", "XRP", "LTC", "ADA"];
  const [primaryCurrency, setprimaryCurrency] = useState("BTC");
  const [secondaryCurrency, setSecondaryCurrency] = useState("BTC");
  const [amount, setAmount] = useState(1);
  const [result, setResult] = useState(0);
  const [exchangeRate, setExchangeRate] = useState(0);

  const props = {
    currencies: currencies,
    primaryCurrency: primaryCurrency,
    setprimaryCurrency: setprimaryCurrency,
    secondaryCurrency: secondaryCurrency,
    setSecondaryCurrency: setSecondaryCurrency,
    amount: amount,
    setAmount: setAmount,
    result: result,
    setResult: setResult,
    exchangeRate,
    setExchangeRate,
  };
  return (
    <div className="col-left">
      <CoverTable {...props} />
      <ExchangeRate {...props} />
    </div>
  );
}

export default CoverCrypto;
