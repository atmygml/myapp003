import './ExpenseItem.css';
import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
	//const [title, setTitle] = useState(props.title);

	/* const clickHandler = () => {
		setTitle('Updated!!!...');
	}; */

	return (
		<Card className='expense-item'>
			<br />
			<ExpenseDate date={props.date} />
			<div className='expense-item__description'>
				<h2>{props.title}</h2>
				<div className='expense-item__price'>${props.amount}</div>
			</div>
			{/* <button onClick={clickHandler}>Change Title</button> */}
			<br />
		</Card>
	);
};

export default ExpenseItem;
