import './App.css'; // 여기 상태가 적용된다
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { render } from '@testing-library/react';
import Users from './components/users/Users';
import User from './components/users/User';

import Navbar from './components/layout/Navbar';
import Search from './components/users/Search';
// import UserItem from './components/users/UserItem';
import React, { Fragment, Component } from 'react';
import axios from 'axios';
import About from './components/pages/About';
import Alert from './components/layout/Alert';

// jsx: js syntax extension
// class App extends Component {
// 	render() {
// 		// jsx를 사용하지 않으면 이런식으로 써야하는데 투 복잡
// 		// return React.createElement('div', {className:'App'}, React.createElement('h1',null,"hello from react"))
// 		const name = 'LIM';
// 		const foo = () => 'Bars'; // return 밖에서 선언해도 된다.(method를 클래스 컴포넌트로 사용)

// 		const loading = false;
// 		// if (loading) {
// 		//   return <h2> Loading ...</h2>
// 		// }

// 		const showName = true;

// 		// jsx style 최고
// 		return (
// 			// only one parent element
// 			<div className='App'>
// 				{/* class대신 className */}
// 				{/* <h1> hello {name.toUpperCase()} from react</h1> */}
// 				{loading ? <h4>Loading ...</h4> : <h1>Hello {showName && name}</h1>}
// 				<h2>goodbye {foo()}</h2>
// 			</div>
// 		);
// 	}
// }

class App extends Component {
	state = {
		users: [],
		user: {}, //empty object <- for getUser function
		repos: [],
		loading: false,
		alert: null, // 이거 왜 {} 이렇게 비워두면 안되지?
		followers: [],
	};

	// // user api에서 받아온 정보가 검색하지 않아도 불러와있다
	// async componentDidMount() {
	// 	this.setState({ loading: true }); // state를 변경하는 방법: setState()
	// 	//fetchAPI Axios
	// 	const res = await axios.get('https://api.github.com/users'); // res는 애초에 배열 형태로 저장된다. api가 배열형태이니.
	// 	this.setState({ users: res.data, loading: false });

	// 	// 이런 방법도 있다.
	// 	// componentDidMount(){
	// 	// 	axios.get('https://api.github.com/users').then(res => console.log(res.data));
	// 	// }
	// }

	// Search Github users
	searchUsers = async (text) => {
		this.setState({ loading: true });
		// 검색 text만 걸려서 나온다.
		const res = await axios.get(
			`https://api.github.com/search/users?q=${text}&client_id = ${process.env.REACT_APP_GITHUG_CLIENT_ID}&client_secret = ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);
		this.setState({ users: res.data.items, loading: false });
		// items라는 사전에 정의된 array를 리턴한다
		// 위의 state에서 users는 이미 배열로 정의해뒀기 때문
	};

	// clear Users from state
	clearUsers = () => {
		this.setState({ users: [], loading: false });
	};

	// set Alert
	setAlert = (msg, type) => {
		this.setState({ alert: { msg, type } });
		setTimeout(() => this.setState({ alert: null }), 2500);
	};

	//get single user
	getUser = async (username) => {
		this.setState({ loading: true });
		const res = await axios.get(
			// ? 를 &로 써서 에러 찾는데 오래걸림
			`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret = ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);
		const res2 = await axios.get(res.data.followers_url);
		// console.log(res2.data);
		this.setState({
			user: res.data,
			loading: false,
			followers: res2.data,
		});
	};

	getUserRepos = async (username) => {
		this.setState({
			loading: true,
		});
		const res = await axios.get(
			// ? 를 &로 써서 에러 찾는데 오래걸림
			`https://api.github.com/users/${username}/repos?per_page=10&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret = ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		); //?per_page=10 : 필요에 의해 지울수도 있다.
		this.setState({ repos: res.data, loading: false });
	};

	render() {
		const { users, loading, user, repos, followers } = this.state;
		// console.log(followers);
		return (
			<Router>
				{/* // 라우터로 다 감싸야한다. */}
				<div className='App'>
					<Navbar title='LikeLion PNU Github Finder' icon='fab fa-github' />
					{/* <UserItem /> */}
					{/* UserItem을 주석처리해놔도, Users로 컴포넌트를 던져놨기에 UserItem에서 정의한 내용을 사용할 수 있다 */}
					<div className='container'>
						<Alert alert={this.state.alert} />
						<Switch>
							{/* keep multiple components in Swich */}
							<Route
								exact
								path='/'
								render={(props) => (
									<Fragment>
										<Search
											searchUsers={this.searchUsers}
											clearUsers={this.clearUsers}
											showClear={users.length > 0 ? true : false}
											setAlert={this.setAlert}
										/>
										{/* this.searchUser는 결국 text일 뿐 */}
										<Users loading_p={loading} users_p={users} />
										{/* grid system */}
									</Fragment>
								)}
							/>

							{/* <Route exact path='/about' component={About} />  this is just sample of Route  */}
							{/* Captial C is not working for component */}

							<Route
								exact
								path='/user/:login' // 콜론 왜 붙지? 애초에 이 path의 용도가 뭐야 => User.js의 8 line
								render={(props) => (
									<User
										{...props} // 얘는 뭐야?
										getUser={this.getUser}
										getUserRepos={this.getUserRepos}
										user={user}
										repos={repos}
										loading={loading}
										followers2={followers}
									/>
								)}
							/>
						</Switch>
					</div>
				</div>
			</Router>
		);
	}
}

// class App extends Component {
// 	render() {
// 		const name = 'Huge Hoo';
// 		const hoo = () => '5Gawd';
// 		const loading = true;
// 		const showName = true;
// 		return (
// 			<div>
// 				{!loading ? (
// 					<h1>Loading . . . </h1>
// 				) : (
// 					<h1>{showName && name.toUpperCase()}</h1>
// 				)}
// 			</div>
// 		);
// 	}
// }

export default App;
