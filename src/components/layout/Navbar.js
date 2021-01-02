//rce enter
// import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types'; // give us warning for type check(kinda typescript)
import { Link } from 'react-router-dom'; // Link는 not default이기에 curly bracets를 사용

// class Navbar extends Component {
// 	static defaultProps = {
// 		// 말그대로 defaultProps이기 때문에, 부모 컴포넌트에서 아래 title, icon이 정의 되지 않았을 때 아래의 속성값을 따른다.
// 		// props라는걸 넘긴다. 이건 일종의 상태
// 		title: 'Github Finder alternative',
// 		icon: 'fab fa-github',
// 	};

const Navbar = ({ icon, title }) => {
	// static defaultProps = {
	// 	title: 'Github Finder alternative',
	// 	icon: 'fab fa-github',
	// }; // this.state가 아니라 this.props이기에 (UserItem.js) 처럼 바꿀 수 없다.ss

	// static propTypes = {
	// 	title: PropTypes.string.isRequired,
	// 	icon: PropTypes.string.isRequired,
	// };

	return (
		// a tag 대신 Link를 사용 => 새로고침시 데이터 날아가기에(refresh되지 안는다.)
		<nav className='navbar bg-primary'>
			<h4>
				<Link to=''>
					<i className={icon} /> {title}
				</Link>
			</h4>
			<ul>
				<li>
					<Link to=''>HOME</Link>
				</li>
				<li>
					<Link to='/about'>About</Link>
				</li>
			</ul>
		</nav>
	);
};

Navbar.defaultProps = {
	title: 'Github Finder alternative',
	icon: 'fab fa-github',
}; // this.state가 아니라 this.props이기에 (UserItem.js) 처럼 바꿀 수 없다.ss

Navbar.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
};

export default Navbar;
