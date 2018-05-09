import React, { Components } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import logo from './logo.svg';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const App = () => (
	<div>
		<h1>Hola</h1>
	</div>
);

const RatesQuery = gql`
  query {
    rates(currency: "USD") {
      currency
    }
  }
`

export default graphql(RatesQuery)(App);
