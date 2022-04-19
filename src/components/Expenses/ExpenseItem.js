import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from './UI/Card';

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <br />
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div> 
      <br />
    </Card>
    );
}

export default ExpenseItem;
