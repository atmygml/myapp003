import React, { useState } from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
	const [selectedDate, setSelectedDate] = useState('');

	const selectDateHandler = (event) => {
		event.preventDefault();
		setSelectedDate(event.target.value);
		props.onSaveSelectedDate(selectedDate);
		setSelectedDate('');
	};

	return (
		<div className='expenses-filter'>
			<div className='expenses-filter__control'>
				<label>Filter by year</label>
				<select onChange={selectDateHandler}>
					<option value='2022'>2022</option>
					<option value='2021'>2021</option>
					<option value='2020'>2020</option>
					<option value='2019'>2019</option>
				</select>
			</div>
		</div>
	);
};

export default ExpensesFilter;
