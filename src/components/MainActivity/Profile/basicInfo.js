import React from 'react';

const BasicInformation = (props) => {
	return (
		<div className='border-bottom border-bottom-light'>
			<h1>Basic Information</h1>
			<h2>
				{props.user.role === 'mentee' ? props.user.fullname : props.user.name}
			</h2>
			<p>
				{props.user.age} -{' '}
				{props.user.role === 'mentee' ? (
					<span>{props.user.school}</span>
				) : (
					<span>{props.user.jobTitle}</span>
				)}
			</p>
		</div>
	);
};

export default BasicInformation;
