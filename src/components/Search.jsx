import React from 'react';

class Search extends React.Component {
	state = {
		search: '',
		type: 'all',
	};

	handleFilter = (event) => {
		this.setState({ [event.target.name]: event.target.value }, () => {
			if (this.state.search !== '') {
				this.props.searchMovies(this.state.search, this.state.type);
			}
		});
	};

	handleKey = (event) => {
		if (event.key === 'Enter') {
			this.props.searchMovies(this.state.search, this.state.type);
		}
	};

	onSearchValueChange = (event) => {
		this.setState({ search: event.target.value });
	};
	render() {
		return (
			<div className='row'>
				<div className='col s12'>
					<div className='input-field '>
						<input
							placeholder='search'
							type='search'
							className='validate'
							value={this.state.search}
							onChange={this.onSearchValueChange}
							onKeyDown={this.handleKey}
						/>
						<button
							className='btn btn-primary search-btn '
							onClick={() => {
								this.props.searchMovies(this.state.search, this.state.type);
							}}
						>
							Search
						</button>
					</div>
					<div>
						<label>
							<input
								class='with-gap'
								name='type'
								value='all'
								type='radio'
								checked={this.state.type === 'all'}
								onChange={this.handleFilter}
							/>
							<span>All</span>
						</label>
						<label>
							<input
								class='with-gap'
								name='type'
								value='movie'
								type='radio'
								checked={this.state.type === 'movie'}
								onChange={this.handleFilter}
							/>
							<span>Movies only</span>
						</label>
						<label>
							<input
								class='with-gap'
								name='type'
								type='radio'
								value='series'
								checked={this.state.type === 'series'}
								onChange={this.handleFilter}
							/>
							<span>Series only</span>
						</label>
					</div>
				</div>
			</div>
		);
	}
}

export { Search };
