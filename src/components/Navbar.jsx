import React from 'react';
import { Link } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';

export default function Navbar() {
	const items = [
		{
			title: 'Priority',
			to: 'priority-scheduling',
			definition:
				'This is a method of scheduling processes based on their priority. In this system, the processes with higher priority are processed before the ones with lower priority. The priority can be defined in various ways, for instance, system processes might have higher priority than user processes. Some systems allow for dynamic priority, where the priority of a process decreases the longer it waits to be executed.',
		},
		{
			title: 'Round Robin',
			to: 'round-robin-scheduling',
			definition:
				'This is a pre-emptive scheduling algorithm that is designed to be fair by giving each process a small amount of CPU time (called a time quantum) in turns. Once a process uses up its time quantum, it is moved to the back of the queue and the next process in the queue is given control of the CPU.',
		},
		{
			title: 'FIFO',
			to: 'FIFO-scheduling',
			definition:
				'This is the simplest type of scheduling algorithm. In this method, the process that arrives first is the one that gets executed first. In other words, the process that has been waiting the longest is selected next.',
		},
		{
			title: 'Time Quantum',
			to: 'quantum-scheduling',
			definition:
				'In the context of scheduling, a quantum (or time quantum) is the amount of time that a process is allowed to run in a preemptive multitasking system. If the process does not finish within the quantum, it is moved to the back of the queue and the next process is run.',
		},
	];
	return (
		<nav className='nav'>
			<Tooltip
				id='nav-tooltip'
				className='w-44 whitespace-break-spaces'
				style={{ width: '30%' }}
			/>
			<ul className='flex gap-x-2 justify-center'>
				{items.map(({ title, to, definition }) => (
					<li className='li'>
						<Link
							id={to}
							to={to}
							data-tooltip-id='nav-tooltip'
							data-tooltip-content={definition}
							data-tooltip-place='bottom'>
							{title}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}

