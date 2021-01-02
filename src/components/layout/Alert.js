import React from 'react';
//rafc: react arrow function component

export const Alert = ({ alert }) => {
	return (
		alert !== null && ( // !== null 부분은 없어도 된다.
			<div className={`alert alert-${alert.type}`}>
				<i className='fas fa-info-circle'>{alert.msg}</i>
			</div>
		)
	);
};

export default Alert;
