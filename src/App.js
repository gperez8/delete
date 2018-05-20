import React from 'react';
import Header from './components/Header/header';
import SideBar from './components/sideBar/sideBar';
import Typography from '@material-ui/core/Typography';

const App = () => (
  <div >
  	<Header />
    <SideBar />
    <main >
		<div  />
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

export default App;
//export default graphql(user)(App);
