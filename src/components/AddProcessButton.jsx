import React from 'react';

export default function AddProcessButton({ onClick }) {
	return (
		<button onClick={onClick} className='add-btn'>
			Add process
		</button>
	);
}

