import React, { Component } from 'react';
import { withFirebase } from '../../Firebase';

class SearchForm extends Component {
	state = {
		name: '',
		jobTitle: '',
	};

	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	handleSubmit = (event) => {
		const { name, jobTitle } = this.state;

		this.props.firebase.mentors(name, jobTitle).then((results) => {
			this.props.onSearch(results);
		});

		event.preventDefault();
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit} className='col'>
				<h1>Search</h1>
				<div className='form-group'>
					<label>
						Name
						<input
							className='form-control'
							name='name'
							type='text'
							value={this.state.name}
							onChange={this.handleChange}
						/>
					</label>
				</div>
				<div className='form-group'>
					<label>
						JobTitle
						<input
							className='form-control'
							name='jobTitle'
							type='text'
							value={this.state.jobTitle}
							onChange={this.handleChange}
						/>
					</label>
				</div>
				<div>
					<button className='btn btn-primary' type='submit'>
						Search
					</button>
				</div>
			</form>
		);
	}
}

export default withFirebase(SearchForm);
