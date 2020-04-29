import React from 'react';

const Experience = (props) => {
  return (  
    <div>
			<h2>{props.data.jobTitle}</h2>
			<p>{props.data.company}</p>
			<p>{props.data.description}</p>
		</div>
  );
}
 
export default Experience;