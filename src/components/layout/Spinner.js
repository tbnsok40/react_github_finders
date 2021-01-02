import React, { Fragment, Component } from 'react';
import spinner from './spinner.gif';

export class Spinner extends Component {
	render() {
		return (
			<Fragment>
				<img
					src={spinner}
					alt='Loading...'
					style={{ width: '200px', margin: 'auto', display: 'block' }}
				/>
			</Fragment>
		);
	}
}

export default Spinner;
