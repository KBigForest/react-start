import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  const year = props.date.toLocaleString("ko-KR", { year: "numeric" });
  const month = props.date.toLocaleString("ko-KR", { month: "long" });
  const day = props.date.toLocaleString("ko-KR", { day: "2-digit" });
  return (
    <div className="expense-date">
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__month">{month}</div>
    </div>
  );
};
export default ExpenseDate;
