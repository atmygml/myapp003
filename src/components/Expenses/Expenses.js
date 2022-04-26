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

	return (
		<div className='expenses'>
			<ExpensesFilter
				initialYear={selectedYear}
				onSaveSelectedDate={saveSelectedDateHandler}
			/>
			<Card className='expenses'>
				{filteredExpenses.map((expense) => (
					<ExpenseItem
						key={expense.id}
						title={expense.title}
						amount={expense.amount}
						date={expense.date}
					/>
				))}
			</Card>
		</div>
	);
};

export default Expenses;
