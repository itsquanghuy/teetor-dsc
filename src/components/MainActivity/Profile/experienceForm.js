import React, { Component } from 'react';

class ExperienceForm extends Component {
	state = {
		jobTitle: '',
		company: '',
		description: '',
	};

	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	handleSubmit = (event) => {
		event.preventDefault();

		const data = { ...this.state };
		this.props.onAddExperience(data);
		this.setState({ jobTitle: '', company: '', description: '' });
	};

	render() {
		const { jobTitle, company, description } = this.state;
		const isValid = jobTitle === '' || company === '' || description === '';

		return (
			<form onSubmit={this.handleSubmit} className='mb-5'>
				<div className='form-group'>
					<label>
						Job Title
						<input
							style={{ width: 525 }}
							className='form-control'
							name='jobTitle'
							type='text'
							value={jobTitle}
							onChange={this.handleChange}
						/>
					</label>
				</div>
				<div className='form-group'>
					<label>
						Company
						<input
							style={{ width: 525 }}
							className='form-control'
							name='company'
							type='text'
							value={company}
							onChange={this.handleChange}
						/>
					</label>
				</div>
				<div className='form-group'>
					<label>
						Description
						<textarea
							style={{ width: 525, height: 200 }}
							className='form-control'
							name='description'
							value={description}
							onChange={this.handleChange}
						/>
					</label>
				</div>
				<div className='text-right' style={{ width: 525 }}>
					<button className='btn btn-primary' disabled={isValid}>
						Add
					</button>
				</div>
			</form>
		);
	}
}

export default ExperienceForm;
