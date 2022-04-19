import React from 'react';
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

	let passUpExpense = '';

	const addExpenseHandler = (expense) => {
		console.log(expense);
		passUpExpense = expense;
	};

	return (
		<div className='App'>
			<br />
			<NewExpense onAddExpense={addExpenseHandler} />
			<br />
			<Expenses items={expenses} />
			<br />
			<div>
				<p>{passUpExpense}</p>
			</div>
		</div>
	);
};

export default App;
