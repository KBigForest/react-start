import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput = (prevState) =>{
    //   return  {...prevState, setEnteredTitle: event.target.value};
    // }
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // })
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    //   setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value
    //   })
  };
  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      data: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData); //상위 실행함수 설정
    //이는 해당함수가 여기 없어도 상위 프로퍼티로 가져오는 것이기 때문에 실행가능! 핵심을 해당 함수의 포인터를 프로퍼티로 전달하는 것임!

    setEnteredTitle(""); //해당 타이틀 초기화
    setEnteredAmount(""); //해당 amount초기화
    setEnteredDate(""); //해당 날짜초기화
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
