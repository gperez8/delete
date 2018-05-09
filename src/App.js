// eslint-disable-next-line

import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
//import logo from './logo.svg';

class App extends Component {
	render() {

		const { user } = this.props.data;

		console.log(this.props.data);
		return (
			<div key={1}>
				 {this.props.data.loading &&
				 	<p>LOADING</p>
				 }

				 {!this.props.data.loading &&
					<div>
						<h1>{ user.name }</h1>
						<h2>{ user.email }</h2>
					</div>	
				 }
			</div>
		)
	}
}

const user = gql`
	query {
		user(id: 1) {
			name
			email
		}
	}
`

export default graphql(user)(App);
