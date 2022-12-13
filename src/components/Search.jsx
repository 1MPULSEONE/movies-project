import React, { useState } from 'react';

const Search = ({ searchMovies = Function.prototype }) => {
	const [search, setSearch] = useState('');
	const [type, setType] = useState('all');

	const handleFilter = (event) => {
		setType(event.target.value);
		searchMovies(search, event.target.value);
	};

	const handleKey = (event) => {
		if (event.key === 'Enter') {
			searchMovies(search, type);
		}
	};

	return (
		<div className='row'>
			<div className='col s12'>
				<div className='input-field '>
					<input
						placeholder='search'
						type='search'
						className='validate'
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						onKeyDown={handleKey}
					/>
					<button
						className='btn btn-primary search-btn '
						onClick={() => {
							searchMovies(search, type);
						}}
					>
						Search
					</button>
				</div>
				<div>
					<label>
						<input
							className='with-gap'
							name='type'
							value='all'
							type='radio'
							checked={type === 'all'}
							onChange={handleFilter}
						/>
						<span>All</span>
					</label>
					<label>
						<input
							className='with-gap'
							name='type'
							value='movie'
							type='radio'
							checked={type === 'movie'}
							onChange={handleFilter}
						/>
						<span>Movies only</span>
					</label>
					<label>
						<input
							className='with-gap'
							name='type'
							type='radio'
							value='series'
							checked={type === 'series'}
							onChange={handleFilter}
						/>
						<span>Series only</span>
					</label>
				</div>
			</div>
		</div>
	);
};
export { Search };
