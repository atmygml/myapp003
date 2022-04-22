import React, { useState } from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
	const [selectedYear, setSelectedYear] = useState('2020');

	const saveSelectedDateHandler = (selectedDate) => {
		setSelectedYear(selectedDate);
		props.onSaveDate(selectedYear);
	};

	return (
		<div className='expenses'>
			<ExpensesFilter
				intialYear={selectedYear}
				onSaveSelectedDate={saveSelectedDateHandler}
			/>
			<Card className='expenses'>
				<ExpenseItem
					title={props.items[0].title}
					amount={props.items[0].amount}
					date={props.items[0].date}
				/>
				<ExpenseItem
					title={props.items[1].title}
					amount={props.items[1].amount}
					date={props.items[1].date}
				/>
				<ExpenseItem
					title={props.items[2].title}
					amount={props.items[2].amount}
					date={props.items[2].date}
				/>
				<ExpenseItem
					title={props.items[3].title}
					amount={props.items[3].amount}
					date={props.items[3].date}
				/>
			</Card>
		</div>
	);
};

export default Expenses;
