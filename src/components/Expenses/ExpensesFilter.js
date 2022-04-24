import React, { useState } from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
	//const initialY = [''];

	//const [selectedYearExp, setSelectedYearExp] = useState(initialY);

	const selectDateHandler = (event) => {
		props.onSaveSelectedDate(event.target.value);
	};

	return (
		<div>
			<div className='expenses-filter'>
				<div className='expenses-filter__control'>
					<label>Filter by year</label>
					<select
						value={props.initialYear}
						//value={selectedYearExp[0]}
						onChange={selectDateHandler}
					>
						<option value='2022'>2022</option>
						<option value='2021'>2021</option>
						<option value='2020'>2020</option>
						<option value='2019'>2019</option>
					</select>
				</div>
			</div>
			<br />
			<div>
				<p style={{ color: 'white' }}>{selectedYearExp[0]}</p>
			</div>
			<br />
		</div>
	);
};

export default ExpensesFilter;
