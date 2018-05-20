import React from 'react';
import Header from './components/Header/header';
import SideBar from './components/sideBar/sideBar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import styles from './components/Header/headerCss';

const App = ({ classes }) => (
	<div className={classes.root}>
		<Header />
		<SideBar />
		<main className={classes.content}>
			<div className={classes.toolbar} />
			<Typography noWrap>{'You think water moves fast? You should see ice.'}</Typography>
		</main>
	</div>
);

/*const user = gql`
	query {
		user(id: 1) {
			name
			email
		}
	}
`*/

export default withStyles(styles, { withTheme: true })(App);
//export default graphql(user)(App);
