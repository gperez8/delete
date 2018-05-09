// eslint-disable-next-line

//import { applyMiddleware } from 'redux';
import ApolloClient from 'apollo-boost';

export const client = new ApolloClient({
	uri: 'http://localhost:8000/graphql',
});

export const getMiddleware = () => {
	/* middleware ha usarse si se esta en produccion ò Desarrollo */
	/*if (false) {
		return applyMiddleware(promiseMiddleware, localStorageMiddleware);
	}

	return applyMiddleware(promiseMiddleware, localStorageMiddleware, createLogger());*/
}
