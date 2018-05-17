// eslint-disable-next-line

import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import { ApolloProvider } from 'react-apollo';
import { composeWithDevTools } from 'redux-devtools-extension';
import { client  } from './config/config';
import rootReducer from './reducers/rootReducer';
import App from './App';

const state = {
	drawer: {
		open: true
	}
}

const store = createStore(rootReducer, state, composeWithDevTools());

/* const enhancer = composeWithDevTools(getMiddleware());
const store = createStore(rootReducer, enhancer); */

render(

	<Provider store={store}>
		<ApolloProvider client={client}>
			<App />
		</ApolloProvider>
	</Provider>,
	document.getElementById('root')
);
