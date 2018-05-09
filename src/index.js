import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { ApolloProvider } from 'react-apollo';
import { composeWithDevTools } from 'redux-devtools-extension';
import { client , getMiddleware } from './config/config';
import rootReducer from './reducers/rootReducer';
import App from './App';

const enhancer = composeWithDevTools(getMiddleware());
const store = createStore(rootReducer, enhancer);

render(
	<ApolloProvider store={store} client={client}>
		<App />
	</ApolloProvider>,
	document.getElementById('root')
);
