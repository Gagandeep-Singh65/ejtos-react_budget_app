import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Currency = () => {
  const { currency, dispatch } = useContext(AppContext);

  const [isOpen, setIsOpen] = useState(false);

  const setCurrency = (currency) => {
    dispatch({
      type: "CHG_CURRENCY",
      payload: currency,
    });
  };

  const currencySelected = () => {
    switch (currency) {
      case "$":
        return "$ Dollar";
      case "£":
        return "£ Pound";
      case "€":
        return "€ Euro";
      case "₹":
        return "₹ Rupee";
      default:
        return "";
    }
  };

  return (
    <div id="currency-menu" className="dropdown" style={{ cursor: "pointer" }}>
      <button
        id="currency-menu-button"
        className="btn dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        style={{ backgroundColor: "#93e399", color: "#fff" }}
        onClick={() => setIsOpen(!isOpen)}
      >
        Currency {"("}
        {currencySelected()}
        {")"}
      </button>
      <ul
        className={`custom-menu dropdown-menu ${isOpen ? "show" : ""} `}
        style={{
          backgroundColor: "#93e399",
          color: "#fff",
          border: "solid 1px #000",
        }}
      >
        <li>
          <button
            className="dropdown-item"
            type="button"
            onClick={() => setCurrency("$")}
          >
            $ Dollar
          </button>
        </li>
        <li>
          <button
            className="dropdown-item"
            type="button"
            onClick={() => setCurrency("£")}
          >
            £ Pound
          </button>
        </li>
        <li>
          <button
            className="dropdown-item"
            type="button"
            onClick={() => setCurrency("€")}
          >
            € Euro
          </button>
        </li>
        <li>
          <button
            className="dropdown-item"
            type="button"
            onClick={() => setCurrency("₹")}
          >
            ₹ Rupee
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Currency;
