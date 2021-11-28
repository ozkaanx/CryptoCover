import React from "react";
import CoverButton from "./CoverButton";

function CoverTable(props) {
  return (
    <div className="cover-table">
      <table>
        <tbody>
          <tr>
            <td className="td-title">Primary Currency</td>
            <td className="td-input">
              <input
                type="number"
                name="amount-1"
                value={props.amount}
                onChange={(e) => props.setAmount(e.target.value)}
              />
            </td>
            <td className="td-select">
              <select
                value={props.primaryCurrency}
                name="option-1"
                className="cover-options"
                onChange={(e) => props.setprimaryCurrency(e.target.value)}
              >
                {props.currencies.map((currens, index) => (
                  <option key={index}>{currens} </option>
                ))}
              </select>
            </td>
          </tr>
          <tr>
            <td className="td-title">Second Currency</td>
            <td className="td-input">
              <input
                type="number"
                name="amount-2"
                value={props.result}
                disabled={true}
              />
            </td>
            <td className="td-select">
              <select
                value={props.secondaryCurrency}
                name="option-2"
                className="cover-options"
                onChange={(e) => props.setSecondaryCurrency(e.target.value)}
              >
                {props.currencies.map((currens, index) => (
                  <option key={index}>{currens} </option>
                ))}
              </select>
            </td>
          </tr>
        </tbody>
      </table>
      <CoverButton {...props} />
    </div>
  );
}

export default CoverTable;
