import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import {Button, Icon, SideNav, SideNavItem} from 'react-materialize'
//import logo from './logo.svg';

class App extends Component {
	render() {

		const { user } = this.props.data;

		console.log('user', user);

		const obj = {
	  		background: 'https://pre00.deviantart.net/ef23/th/pre/i/2017/294/2/9/goku_miggate_no_goku_i_3_584_by_koku78-dbrb1j0.png',
	  		image: 'https://pre00.deviantart.net/ef23/th/pre/i/2017/294/2/9/goku_miggate_no_goku_i_3_584_by_koku78-dbrb1j0.png',
	  		name: 'HOLA'
	  	}

	  	console.log('OBJ',obj);

		return (
			<div key={1}>
				 
				{!this.props.data.loading &&
				  	<SideNav
				  		trigger={<Button>SIDE NAV DEMO</Button>}
				  		options={{ closeOnClick: true }}
				  	>
				  	<SideNavItem userView
					  	user={{
					  		background: 'https://pre00.deviantart.net/ef23/th/pre/i/2017/294/2/9/goku_miggate_no_goku_i_3_584_by_koku78-dbrb1j0.png',
					  		image: 'https://pre00.deviantart.net/ef23/th/pre/i/2017/294/2/9/goku_miggate_no_goku_i_3_584_by_koku78-dbrb1j0.png',
					  		name: `${user.name}`,
					  		email: `${user.email}`
					  	}}
				  	/>
				  	<SideNavItem href='#!icon' icon='cloud'>First Link With Icon</SideNavItem>
				  	<SideNavItem href='#!second'>Second Link</SideNavItem>
				  	<SideNavItem divider />
				  	<SideNavItem subheader>Subheader</SideNavItem>
				  	<SideNavItem divider />
				  	<SideNavItem waves href='#!third'>Third Link With Waves</SideNavItem>
				  	<SideNavItem divider />
				  	</SideNav>
					
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
