import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Header from './components/Header/header';
import SideBar from './components/sideBar/sideBar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import styles from './components/Header/headerCss';
import { Hola1, Hola2, Hola3, Hola4 } from './components/hola';

const App = ({ classes }) => (
	<div className={classes.root}>
		<Header />
		<SideBar />
		<main className={classes.content}>
			<div className={classes.toolbar} />
			<Typography noWrap>{'You think water moves fast? You should see ice.'}</Typography>
			<Switch>
				<Route exact path='/' component={Hola1}/>
				<Route path='/hola2' component={Hola2}/>
				<Route path='/hola3' component={Hola3}/>
				<Route path='/hola4' component={Hola4}/>
			</Switch>

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
