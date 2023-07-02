import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
	return (
		<nav className='nav'>
			<ul className='flex gap-x-2 justify-center'>
				<li className='li'>
					<Link to='/priority-scheduling'>Priority</Link>
				</li>
				<li className='li'>
					<Link to='/FIFO-scheduling'>FIFO</Link>
				</li>
				<li className='li'>
					<Link to='/quantum-scheduling'>Time Quantum</Link>
				</li>
				<li className='li'>
					<Link to='/round-robin-scheduling'>Round Robin</Link>
				</li>
			</ul>
		</nav>
	);
}

