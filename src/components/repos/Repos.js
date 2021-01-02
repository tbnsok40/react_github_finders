import React from 'react';
import PropTypes from 'prop-types';
import RepoItem from './RepoItem';
export const Repos = ({ repos }) => {
	const substring = /likelion/;

	return repos.map((repo) => (
		<RepoItem repo={repo} key={repo.id} />
		// console.log(repo.name),
		// substring.test(repo.name) ? <RepoItem repo={repo} key={repo.id} /> : ''
	));
};
Repos.propTypes = {
	repos: PropTypes.array.isRequired,
};
export default Repos;
