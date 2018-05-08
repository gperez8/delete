import React from 'react';
import logo from './logo.svg';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const App = () => (
	<div>
		<h1>Hola Mundo</h1>	
	</div>
)

const user = gql`
    query{
      user(id:2){
        name
        email
      }
    }
`

export default graphql(user)(App);
