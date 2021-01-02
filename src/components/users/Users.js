import React, { Component } from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types'; //impt 개꿀티

// export class Users extends Component {
// 	// state = {
// 	// 	users: [
// 	// 		{
// 	// 			login: 'mojombo',
// 	// 			id: 1,
// 	// 			node_id: 'MDQ6VXNlcjE=',
// 	// 			avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
// 	// 			gravatar_id: '',
// 	// 			url: 'https://api.github.com/users/mojombo',
// 	// 			html_url: 'https://github.com/mojombo',
// 	// 			followers_url: 'https://api.github.com/users/mojombo/followers',
// 	// 			following_url:
// 	// 				'https://api.github.com/users/mojombo/following{/other_user}',
// 	// 			gists_url: 'https://api.github.com/users/mojombo/gists{/gist_id}',
// 	// 			starred_url:
// 	// 				'https://api.github.com/users/mojombo/starred{/owner}{/repo}',
// 	// 			subscriptions_url: 'https://api.github.com/users/mojombo/subscriptions',
// 	// 			organizations_url: 'https://api.github.com/users/mojombo/orgs',
// 	// 			repos_url: 'https://api.github.com/users/mojombo/repos',
// 	// 			events_url: 'https://api.github.com/users/mojombo/events{/privacy}',
// 	// 			received_events_url:
// 	// 				'https://api.github.com/users/mojombo/received_events',
// 	// 			type: 'User',
// 	// 			site_admin: false,
// 	// 		},
// 	// 		{
// 	// 			login: 'defunkt',
// 	// 			id: 2,
// 	// 			node_id: 'MDQ6VXNlcjI=',
// 	// 			avatar_url: 'https://avatars0.githubusercontent.com/u/2?v=4',
// 	// 			gravatar_id: '',
// 	// 			url: 'https://api.github.com/users/defunkt',
// 	// 			html_url: 'https://github.com/defunkt',
// 	// 			followers_url: 'https://api.github.com/users/defunkt/followers',
// 	// 			following_url:
// 	// 				'https://api.github.com/users/defunkt/following{/other_user}',
// 	// 			gists_url: 'https://api.github.com/users/defunkt/gists{/gist_id}',
// 	// 			starred_url:
// 	// 				'https://api.github.com/users/defunkt/starred{/owner}{/repo}',
// 	// 			subscriptions_url: 'https://api.github.com/users/defunkt/subscriptions',
// 	// 			organizations_url: 'https://api.github.com/users/defunkt/orgs',
// 	// 			repos_url: 'https://api.github.com/users/defunkt/repos',
// 	// 			events_url: 'https://api.github.com/users/defunkt/events{/privacy}',
// 	// 			received_events_url:
// 	// 				'https://api.github.com/users/defunkt/received_events',
// 	// 			type: 'User',
// 	// 			site_admin: false,
// 	// 		},
// 	// 		{
// 	// 			login: 'pjhyett',
// 	// 			id: 3,
// 	// 			node_id: 'MDQ6VXNlcjM=',
// 	// 			avatar_url: 'https://avatars0.githubusercontent.com/u/3?v=4',
// 	// 			gravatar_id: '',
// 	// 			url: 'https://api.github.com/users/pjhyett',
// 	// 			html_url: 'https://github.com/pjhyett',
// 	// 			followers_url: 'https://api.github.com/users/pjhyett/followers',
// 	// 			following_url:
// 	// 				'https://api.github.com/users/pjhyett/following{/other_user}',
// 	// 			gists_url: 'https://api.github.com/users/pjhyett/gists{/gist_id}',
// 	// 			starred_url:
// 	// 				'https://api.github.com/users/pjhyett/starred{/owner}{/repo}',
// 	// 			subscriptions_url: 'https://api.github.com/users/pjhyett/subscriptions',
// 	// 			organizations_url: 'https://api.github.com/users/pjhyett/orgs',
// 	// 			repos_url: 'https://api.github.com/users/pjhyett/repos',
// 	// 			events_url: 'https://api.github.com/users/pjhyett/events{/privacy}',
// 	// 			received_events_url:
// 	// 				'https://api.github.com/users/pjhyett/received_events',
// 	// 			type: 'User',
// 	// 			site_admin: false,
// 	// 		},
// 	// 	],
// 	// };
// 	render() {
// 		return (
// 			<div style={userStyle}>
// 				{/* reason why this is single bracet */}

// 				{this.props.users.map((
// 					// 기존까진 api를 이렇게 코드의 states로 저장해서 가져왔다면, api서버를 가져올 땐 props로 바꿔줄 수 있다.
// 					//props <->state
// 					user // user is property
// 				) => (
// 					<UserItem key={user.id} user2={user} /> //props get passed like this to UserItem
// 				))}
// 				{/* passing the user prop into the UserItem */}
// 			</div>
// 		);
// 	}
// }

const Users = ({ users_p, loading_p }) => {
	if (loading_p) {
		return <Spinner></Spinner>;
	} else {
		return (
			<div style={userStyle}>
				{users_p.map((user) => (
					<UserItem key={user.id} users_p={user} /> //props get passed like this to UserItem
				))}
			</div>
		);
	}
};

Users.propTypes = {
	users_p: PropTypes.array.isRequired, //ptar
	loading_p: PropTypes.bool.isRequired,
};
// grid System
const userStyle = {
	display: 'grid',
	gridTemplateColumns: 'repeat(3,1fr)',
	gridGap: '1rem',
};
export default Users;
