import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Axios from 'axios';
import './assets/css/style.css';
import Profile from './pages/profile';
import Details from './pages/details';
import NotFound from './pages/404';

function App() {
	const [userData, setUserData] = useState([])

	useEffect(() => {
		Axios({
			method: 'GET',
			url: 'https://reqres.in/api/users?page=2'
		})
		.then((response)=>{
			setUserData(response.data.data)
		})
		.catch((err)=>{
			console.log(err);
		})
	}, [])

	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/" render={(props) => <Profile {...props} userData={userData} /> } />
					<Route exact path="/details/:id" render={(props) => <Details {...props} userData={userData} /> } />
					<Route component={NotFound} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
