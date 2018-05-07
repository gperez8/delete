import { applyMiddleware } from 'redux';
import ApolloClient from 'apollo-boost';

export const client = new ApolloClient({
	uri: 'https://w5xlvm3vzz.lp.gql.zone/graphql',
});

export const getMiddleware = () => {
	/* middleware ha usarse si se esta en produccion ò Desarrollo */
	if (false) {
		return applyMiddleware(promiseMiddleware, localStorageMiddleware);
	}

	return applyMiddleware(promiseMiddleware, localStorageMiddleware, createLogger());
}
