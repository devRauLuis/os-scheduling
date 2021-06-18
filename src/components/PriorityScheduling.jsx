import React, { useEffect, useState } from 'react';
import usePriorityQueue from '../customHooks/usePriorityQueue';
import {
	getRndNumber,
	getRndPriority,
	getRndQuantum,
	processNames,
	delay,
} from '../utils';
import ProcessList from './ProcessList';

export default function PriorityScheduling() {
	const { PriorityQueue } = usePriorityQueue([]);
	const [inProgress, setInProgress] = useState([]);
	const [completed, setCompleted] = useState([]);
	const handleAddProcess = () => {
		const newProcess = [
			processNames[getRndNumber(0, processNames.length - 1)],
			getRndPriority(),
			getRndQuantum(),
		];
		console.log('Adding new process', ...newProcess);
		PriorityQueue.enqueue(...newProcess);
	};

	useEffect(() => {
		const workProcess = async (element) => {
			await delay(element.quantum);
			console.log('Waited ' + element.quantum + 'ms');
			setInProgress([]);
			setCompleted((c) => [...c, element]);
		};
		if (inProgress.length === 0 && PriorityQueue.queue.length > 0) {
			const element = { ...PriorityQueue.queue[0] };
			console.log(element);
			setInProgress([element]);
			PriorityQueue.dequeue();
			workProcess(element);
		}
	}, [PriorityQueue, inProgress]);

	return (
		<div className='mt-4'>
			<h2 className='title'>Planificación por Prioridad</h2>
			<button onClick={handleAddProcess} className='add-btn'>
				Agregar proceso
			</button>
			<div className='flex w-full gap-x-2 mt-2'>
				<ProcessList
					list={PriorityQueue.queue}
					title={'En espera'}
					color='waiting'
				/>
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
