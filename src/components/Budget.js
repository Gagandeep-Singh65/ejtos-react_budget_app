import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const BUDGET_MAX_VALUE = 20000;

const Budget = () => {
  const { budget, expenses, currency, dispatch } = useContext(AppContext);
  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);
  const [newBudget, setNewBudget] = useState(budget);
  const handleBudgetChange = (event) => {
    setNewBudget(event.value);
    const enteredValue = Number(event.target.value);

    // check if the entered value is a number
    if (Number.isNaN(enteredValue)) {
      alert("Please enter a valid number.");
      return;
    }

    // check if the entered value is an integer number
    if (!Number.isInteger(enteredValue)) {
      alert("Please enter an integer number.");
      return;
    }

    if (totalExpenses > enteredValue) {
      alert(
        "You cannot reduce the budget value lower than the spending " +
          currency +
          totalExpenses
      );
    } else {
      if (enteredValue > BUDGET_MAX_VALUE) {
        alert("Please enter a value less than " + BUDGET_MAX_VALUE);
        return;
      }

      dispatch({
        type: "SET_BUDGET",
        payload: enteredValue,
      });
    }
  };
  return (
    <div className="alert alert-secondary">
      {/* remove {budget} from <span>Budget: £{budget}</span> */}
      <span>Budget: {currency}</span>
      <input
        type="number"
        step="10"
        value={newBudget}
        onChange={handleBudgetChange}
      ></input>
    </div>
  );
};
export default Budget;
