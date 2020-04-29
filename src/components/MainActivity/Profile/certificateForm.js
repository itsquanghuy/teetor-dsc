import React, { Component } from 'react';

class CertificateForm extends Component {
	state = {
		name: '',
		organization: '',
		url: '',
	};

	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	handleSubmit = (event) => {
		event.preventDefault();

		const data = { ...this.state };
		this.props.onAddCertificate(data);
		this.setState({ name: '', organization: '', url: '' });
	};

	render() {
		const { name, organization, url } = this.state;
		const isValid = name === '' || organization === '' || url === '';

		return (
			<form onSubmit={this.handleSubmit} className='mb-3'>
				<div className='form-group'>
					<label>
						Name
						<input
							style={{ width: 525 }}
							className='form-control'
							name='name'
							type='text'
							value={name}
							onChange={this.handleChange}
						/>
					</label>
				</div>
				<div className='form-group'>
					<label>
						Organization
						<input
							style={{ width: 525 }}
							className='form-control'
							name='organization'
							type='text'
							value={organization}
							onChange={this.handleChange}
						/>
					</label>
				</div>
				<div className='form-group'>
					<label>
						URL
						<input
							style={{ width: 525 }}
							className='form-control'
							name='url'
							type='url'
							value={url}
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

export default CertificateForm;
