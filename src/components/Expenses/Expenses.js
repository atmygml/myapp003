import React, { useState } from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
	const yearInit = '2020';

	const [selectedYear, setSelectedYear] = useState(yearInit);

	const saveSelectedDateHandler = (selectedDate) => {
		setSelectedYear(selectedDate);
	};

	const filteredExpenses = props.items.filter((expense) => {
		return expense.date.getFullYear().toString() === selectedYear;
	});

	let expensesContent = (
		<p style={{ color: 'white' }}>No expenses found...</p>
	);

	if (expensesContent.length > 0) {
		filteredExpenses.map((expense) => (
			<ExpenseItem
				key={expense.id}
				title={expense.title}
				amount={expense.amount}
				date={expense.date}
			/>
		));
	}

	return (
		<div className='expenses'>
			<ExpensesFilter
				initialYear={selectedYear}
				onSaveSelectedDate={saveSelectedDateHandler}
			/>
			<Card className='expenses'>{expensesContent}</Card>
		</div>
	);
};

export default Expenses;
