import React from 'react';
import { useEffect, useState } from 'react';
import useQueue from '../customHooks/useQueue';
import { getRndNumber, getRndQuantum, processNames, delay } from '../utils';
import ProcessList from './ProcessList';

export default function RoundRobin() {
	const { Queue } = useQueue();
	const [inProgress, setInProgress] = useState([]);
	const [completed, setCompleted] = useState([]);
	const handleAddProcess = () => {
		const newProcess = [
			processNames[getRndNumber(0, processNames.length - 1)],
			getRndQuantum(),
		];
		Queue.enqueue(...newProcess);
	};

	const defaultQuantum = 4000;

	useEffect(() => {
		const workProcess = async (element) => {
			await delay(
				defaultQuantum > element.quantum ? element.quantum : defaultQuantum
			);
			console.log('Waited ' + defaultQuantum + 'ms');
			if (element.quantum > defaultQuantum) {
				console.log(
					'Not enough time to execute... Adding back to the queue...',
					element
				);
				Queue.enqueue(element.element, element.quantum - defaultQuantum);
			} else setCompleted((c) => [...c, element]);
			setInProgress([]);
		};
		if (inProgress.length === 0 && Queue.queue.length > 0) {
			const element = { ...Queue.queue[0] };
			console.log(element);
			Queue.dequeue();
			setInProgress([element]);
			workProcess(element);
		}
	}, [Queue, inProgress]);

	return (
		<div className='mt-4'>
			<h2 className='title'>Planificación Round Robin</h2>
			<button onClick={handleAddProcess} className='add-btn'>
				Agregar proceso
			</button>
			<div className='flex w-full gap-x-2 mt-2'>
				{' '}
				<ProcessList list={Queue.queue} title={'En espera'} color='waiting' />
				<ProcessList
					list={inProgress}
					title={'En proceso'}
					color='in-progress'
				/>
				<ProcessList list={completed} title={'Completados'} color='completed' />
			</div>
		</div>
	);
}
