import './ExpenseItem.css';
import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

const ExpenseItem = (props) => {
	const [title, setTitle] = useState(props.title);

	const clickHandler = () => {
		setTitle('Updated!!!...');
	};

	return (
		<div>
			<ExpensesFilter />
			<br />
			<Card className='expense-item'>
				<br />
				<ExpenseDate date={props.date} />
				<div className='expense-item__description'>
					<h2>{title}</h2>
					<div className='expense-item__price'>${props.amount}</div>
				</div>
				<button onClick={clickHandler}>Change Title</button>
				<br />
			</Card>
		</div>
	);
};

export default ExpenseItem;
