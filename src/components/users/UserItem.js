import React from 'react';
// import { render } from '@testing-library/react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// 	// constructor() {
// 	// 	this.state = {
// 	// 		id: 'id',
// 	// 		login: 'hugehoo',
// 	// 		avatar_url: 'https://avatars0.githubusercontent.com/u/40200760?s=460&u=a897fedefaa9859e5445eec4702c5f986049008b&v=4',
// 	// 		html_url: 'https://github.com/tbnsok40',
// 	// 	};
// 	// } // 꼭 constructor 형태로 쓸필요없고 state만 정의해도 된다.

// class UserItem extends Component {
// 	state = {
// 		id: 'id',
// 		name: 'huge hoo',
// 		avatar_url:
// 			'https://avatars0.githubusercontent.com/u/40200760?s=460&u=a897fedefaa9859e5445eec4702c5f986049008b&v=4',
// 		html_url: 'https://github.com/tbnsok40',
// 	};
// 	render() {
// 		const { name, avatar_url, html_url } = this.state;
// 		return (
// 			<div className='card text-center'>
// 				<img src={avatar_url} className='round-img' style={{ width: '90px' }} />
// 				<h3>{name.toUpperCase()}</h3>
// 				<div>
// 					<a href={html_url} className='btn btn-dark btn-sm my-1'>
// 						MORE
// 					</a>
// 				</div>
// 			</div>
// 		);
// 	}
// }
// export default UserItem;

const UserItem = ({ users_p: { login, avatar_url, html_url } }) => {
	return (
		<div className='card text-center'>
			<img
				src={avatar_url}
				className='round-img'
				style={{ width: '80px' }}
				alt=''
			/>
			<h3>{login.toUpperCase()}</h3>
			<div>
				<Link to={`/user/${login}`} className='btn btn-dark btn-sm my-1'>
					MORE
				</Link>
			</div>
		</div>
	);
};

UserItem.propTypes = {
	users_p: PropTypes.object.isRequired,
};

//class형
// class UserItem extends Component {
// 	state = {
// 		id: 'id',
// 		login: 'huge hoo',
// 		avatar_url:
// 			'https://avatars0.githubusercontent.com/u/40200760?s=460&u=a897fedefaa9859e5445eec4702c5f986049008b&v=4',
// 		html_url: 'https://github.com/tbnsok40',
// 	}; // 이제 user가 건네받는것은 props이기에 state가 필요없음(주석처리해도댐)

// 	render() {
// 		const { login, avatar_url, html_url } = this.state;
// 		// const { login, avatar_url, html_url } = props.user; // from Users.js -> and it is props now, not states.

// 		return (
// 			<div className='card text-center'>
// 				<img src={avatar_url} className='round-img' style={{ width: '80px' }} />
// 				<h3>{login.toUpperCase()}</h3>
// 				<div>
// 					<a href={html_url} className='btn btn-dark btn-sm my-1'>
// 						MORE
// 					</a>
// 				</div>
// 			</div>
// 		);
// 	}
// }
export default UserItem;
