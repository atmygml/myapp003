import React, { useState } from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

// test upload changes

const App = () => {
	const expenses = [
		{
			id: 'e1',
			title: 'Toilet Paper',
			amount: 94.12,
			date: new Date(2020, 7, 14),
		},
		{
			id: 'e2',
			title: 'New TV',
			amount: 799.49,
			date: new Date(2021, 2, 12),
		},
		{
			id: 'e3',
			title: 'Car Insurance',
			amount: 294.67,
			date: new Date(2021, 2, 28),
		},
		{
			id: 'e4',
			title: 'New Desk (Wooden)',
			amount: 450,
			date: new Date(2021, 5, 12),
		},
	];

	/* return React.createElement(
		'div',
		{},
		React.createElement(
			'h2',
			{ className: 'App' },
			"let's get started...",
		),
		React.createElement(
			'p',
			{},
			'this is also visible too in this case...',
		),
		React.createElement(Expenses, { items: expenses }),
	); */

	const [passUpExpense, setPassUpExpense] = useState('');
	//const [passUpDate, setPassUpDate] = useState('');

	const addExpenseHandler = (expense) => {
		console.log(expense);
		setPassUpExpense(JSON.stringify(expense));
	};

	const selectedYearInApp = '';

	const saveDateHandler = (selectedDate) => {
		console.log(selectedDate);
		selectedYearInApp = selectedDate;
		//setPassUpDate(selectedDate);
	};

	return (
		<div className='App'>
			<br />
			<NewExpense onAddExpense={addExpenseHandler} />
			<br />
			<Expenses onSaveDate={saveDateHandler} items={expenses} />
			<br />
			<div>
				<p style={{ color: 'white' }}>{passUpExpense}</p>
			</div>
			<br />
			<div>
				<p style={{ color: 'white' }}>{selectedYearInApp}</p>
			</div>
			<br />
		</div>
	);
};

export default App;
