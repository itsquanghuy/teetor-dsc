import React, { Component } from 'react';

const Certificate = (props) => {
	return (
		<div>
			<h2>{props.data.name}</h2>
			<p>{props.data.organization}</p>
			<p>{props.data.url}</p>
		</div>
	);
};

export default Certificate;
