import React, { Component } from 'react';
import CertificateForm from './certificateForm';
import Certificate from './certificate';

class Certifications extends Component {
	render() {
		return (
			<div className='mt-5 border-bottom border-bottom-light'>
				<h1>Certifications</h1>
				<CertificateForm onAddCertificate={this.props.onAddCertificate} />
				{this.props.user.certificates.map((cert) => (
					<Certificate data={cert} key={cert.url} />
				))}
			</div>
		);
	}
}

export default Certifications;
