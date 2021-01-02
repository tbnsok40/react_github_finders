import React, { Component, Fragment } from 'react';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import Repos from '../repos/Repos';
import { Link } from 'react-router-dom';
export class User extends Component {
	componentDidMount() {
		// when componenet is loaded,
		this.props.getUser(this.props.match.params.login); // :login에서 받아온 params, getUser의 요소로 넘어감(App.js의 getUser 선언부의 username으로)
		// match,param : is one set
		this.props.getUserRepos(this.props.match.params.login);
	}
	static propTypes = {
		loading: PropTypes.bool,
		user: PropTypes.object.isRequired,
		getUser: PropTypes.func.isRequired,
		repos: PropTypes.array.isRequired,
		getUserRepos: PropTypes.func.isRequired,
	};

	render() {
		const { user, loading, followers2, repos } = this.props;
		const {
			name,
			avatar_url,
			location,
			bio,
			blog,
			company,
			login,
			html_url,
			followers,
			following,
			public_repos,
			public_gists,
			hireable,
		} = user; //this.props.user가 가지고 있던 정보들(from API) user는 from App.js 150line
		// user라고 바꿨지만, this.props.user도 가능(처음 this.props정의에서 {user}를 뺀다면.)

		// const count = true;
		// if (count) {
		// 	this.props.getFollewers(login);
		// }
		// count = false;
		// if followers2.length

		var followers3 = Array.prototype.slice.apply(followers2); // 이게 킬링포인트(master key)
		console.log({ public_repos });

		// console.log({ followers2 }.length);

		if (loading) return <Spinner />;
		return (
			<Fragment>
				{/* link tag덕분에 뒤로가기 눌러도 검색결과 남아있다. */}
				<Link to='/' className='btn btn-light'>
					Back to search
				</Link>
				{/* Hireable:{' '} */}
				{hireable ? (
					<i className='fas fa-check text-success' />
				) : (
					<i className='fas fa-times-circle text-danger' />
				)}
				<div className='card grid-2'>
					<div className='all-center'>
						<img
							src={avatar_url}
							className='round-img '
							style={{ width: '150px' }}
							alt=''
						/>
						<h1> {name} </h1>
						<p>Location: {location}</p>
					</div>
					<div>
						{bio && (
							<Fragment>
								<h3>{bio}</h3>
								{/* <p>{bio}</p> */}
							</Fragment>
						)}
						<a href={html_url} className='btn btn-dark my-1'>
							Visit Github profile
						</a>

						<ul>
							<li>
								{login && (
									<Fragment>
										<strong>Username: </strong>
										{login}
									</Fragment>
								)}
							</li>

							<li>
								{company && (
									<Fragment>
										<strong>company: </strong>
										{company}
									</Fragment>
								)}
							</li>

							<li>
								{blog && (
									<Fragment>
										<strong>blog: </strong>
										{blog}
									</Fragment>
								)}
							</li>
						</ul>
					</div>
				</div>
				<div className='card text-center'>
					<div className='badge badge-primary'>Followers: {followers}</div>
					<div className='badge badge-success'>following: {following}</div>
					<div className='badge badge-light'>public_repos: {public_repos}</div>
					<div className='badge badge-dark'>public_gists: {public_gists}</div>
				</div>
				<div>
					<Repos key={repos.id} repos={repos} />
				</div>

				<div className='card text-center' style={userStyle}>
					{followers3.map((dish) => (
						<ul>
							<a href={dish.html_url}>
								<img src={dish.avatar_url} alt='' style={{ width: '90px' }} />
								<li>{dish.login}</li>
							</a>

							{/* Link 멕이려면 새로 판을 짜줘야 한다. 이걸 할 줄 알아야 react를 더 잘 쓰게 될듯 */}
							{/* <Link to={`/user/${dish.login}`}>
								<img src={dish.avatar_url} alt='' style={{ width: '90px' }} />
								<li>{dish.login}</li>
							</Link> */}
						</ul>
					))}
				</div>
			</Fragment>
		);
	}
}

const userStyle = {
	display: 'grid',
	gridTemplateColumns: 'repeat(5,1fr)',
	gridGap: '1rem',
};

export default User;
