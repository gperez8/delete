import React from 'react';
import SideBar from './components/Header/header';
import MiniDrawer from './components/sideBar/sideBar';

const App = () => (
  <div>
    <MiniDrawer />
    <SideBar />
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
