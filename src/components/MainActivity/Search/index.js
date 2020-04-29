import React, { Component } from 'react';
import SearchForm from './searchForm';
import SearchResult from './searchResult';
import { Accordion } from 'react-bootstrap';

class Search extends Component {
	state = {
		searchResults: [],
	};

	onSearch = (results) => {
		this.setState({ searchResults: results });
	};

	render() {
		return (
			<div className='row'>
				<SearchForm onSearch={this.onSearch} />
				<div className='col'>
					<h2>Search Results</h2>
					<Accordion>
						{this.state.searchResults.map((result) => (
							<SearchResult
								key={result.email}
								result={result}
								user={this.props.user}
								onConnectTo={this.props.onConnectTo}
								onDisconnectTo={this.props.onDisconnectTo}
								onCancelTo={this.props.onCancelTo}
							/>
						))}
					</Accordion>
				</div>
			</div>
		);
	}
}

export default Search;
