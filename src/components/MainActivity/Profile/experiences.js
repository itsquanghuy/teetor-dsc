import React, { Component } from 'react';
import ExperienceForm from './experienceForm';
import Experience from './experience';

class Experiences extends Component {
	render() {
		return (
			<div className='mt-5 border-bottom border-bottom-light'>
				<h1>Experiences</h1>
				<ExperienceForm onAddExperience={this.props.onAddExperience} />
				{this.props.user.experiences.map((exp) => (
					<Experience key={exp.jobTitle + '-' + exp.company} data={exp} />
				))}
			</div>
		);
	}
}

export default Experiences;
