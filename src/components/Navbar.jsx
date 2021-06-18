import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
	return (
		<nav className='nav mt-2'>
			<ul className='flex gap-x-2 justify-center'>
				<li className='li'>
					<Link to='/priority-scheduling'>Planificación por prioridad</Link>
				</li>
				<li className='li'>
					<Link to='/FIFO-scheduling'>Planificacion FIFO</Link>
				</li>
				<li className='li'>
					<Link to='/quantum-scheduling'>Planificación Quantum</Link>
				</li>
				<li className='li'>
					<Link to='/round-robin-scheduling'>Planificación Round Robin</Link>
				</li>
			</ul>
		</nav>
	);
}
