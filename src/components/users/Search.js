import React, { Component } from 'react';
import PropTypes from 'prop-types';
export class Search extends Component {
	state = {
		text: '',
	};
	static propTypes = {
		searchUsers: PropTypes.func.isRequired,
		clearUsers: PropTypes.func.isRequired,
		showClear: PropTypes.bool.isRequired,
		setAlert: PropTypes.func.isRequired,
	};

	//onChange = (e) => this.setState({ [e.target.name]: e.target.value }); // 한줄이니까 {} 없애도 된다.
	onChange = (e) => this.setState({ [e.target.name]: e.target.value }); // 왜 e.target.name / name이 들어감???
	onSubmit = (e) => {
		e.preventDefault();

		if (this.state.text === '') {
			this.props.setAlert('please enter something', 'light');
		} else {
			this.props.searchUsers(this.state.text); // 여기서 변경된 text를 searchUsers(in App.js 76line)로 던진다.
			this.setState({ text: '' });
		}
	};
	render() {
		const { showClear, clearUsers } = this.props;
		return (
			//return은 말 그대로 반환하여 화면에 보여주는 느낌, render는
			<div>
				<form onSubmit={this.onSubmit} className='form'>
					<input
						type='text'
						name='text' // state의 text와 상통
						placeholder='search users...'
						value={this.state.text} // 여기서 onChange를 먹여주지 않으면 state에서 text를 ''로 정의했기 때문에 값이 고정 돼버린다.
						onChange={this.onChange}
					/>
					<input
						type='submit'
						className='btn btn-dark btn-block'
						value='search'
					/>
				</form>
				{showClear && (
					<button className='btn btn-ligt btn-block' onClick={clearUsers}>
						Clear
					</button> //showClear가 true일 때만 button태그가 나타난다.
				)}
			</div>
		);
	}
}

export default Search;
