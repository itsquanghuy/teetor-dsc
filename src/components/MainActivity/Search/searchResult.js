import React, { useState } from 'react';
import { Accordion, Button, Card } from 'react-bootstrap';

const SearchResult = (props) => {
	const { user, result } = props;
	const [open, setOpen] = useState(false);
	console.log(result);
	return (
		<Card>
			<Card.Header>
				<div className='border-bottom border-bottom-light p-2 text-center'>
					<h2>{result.name}</h2>
					<p>
						{result.age} - {result.jobTitle}
					</p>
					{user.pendingConnection === null && user.connection === null ? (
						<div>
							<button
								className='btn btn-primary'
								onClick={() => props.onConnectTo(result)}
							>
								Connect
							</button>
						</div>
					) : user.pendingConnection !== null ? (
						<div>
							<button
								className='btn btn-outline-primary mr-2'
								onClick={() => props.onCancelTo(result)}
							>
								Cancel
							</button>
							<button disabled={true} className='btn btn-primary'>
								Pending
							</button>
						</div>
					) : (
						<div>
							<button
								className='btn btn-outline-primary'
								onClick={() => props.onDisconnectTo(result)}
							>
								Disconnect
							</button>
						</div>
					)}
					<Accordion.Toggle as={Button} variant='link' eventKey='0'>
						<button type='button' class='btn btn-light'>
							<i className='fa fa-sort-down'></i>
						</button>
					</Accordion.Toggle>
				</div>
				<Accordion.Collapse eventKey='0'>
					<Card.Body>
						<h3 className='mb-4'>Certificates</h3>
						{result.certificates.map((cert) => (
							<div>
								<h4>{cert.name}</h4>
								<p>{cert.organization}</p>
								<p>{cert.url}</p>
							</div>
						))}
						<h3 className='mt-5 mb-4'>Experiences</h3>
						{result.experiences.map((exp) => (
							<div>
								<h4>{exp.jobTitle}</h4>
								<p>{exp.company}</p>
								<p>{exp.description}</p>
							</div>
						))}
					</Card.Body>
				</Accordion.Collapse>
			</Card.Header>
		</Card>
	);
};

export default SearchResult;
