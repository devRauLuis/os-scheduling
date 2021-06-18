import { useEffect, useState } from 'react';
import useQueue from '../customHooks/useQueue';
import { getRndNumber, getRndQuantum, processNames, delay } from '../utils';
import ProcessList from './ProcessList';

export default function FIFOScheduling() {
	const { Queue } = useQueue([]);
	const [inProgress, setInProgress] = useState([]);
	const [completed, setCompleted] = useState([]);
	const handleAddProcess = () => {
		const newProcess = [
			processNames[getRndNumber(0, processNames.length - 1)],
			getRndQuantum(),
		];
		console.log('Adding new process', ...newProcess);
		Queue.enqueue(...newProcess);
	};

	useEffect(() => {
		const workProcess = async (element) => {
			await delay(element.quantum);
			console.log('Waited ' + element.quantum + 'ms');
			setInProgress([]);
			setCompleted((c) => [...c, element]);
		};
		if (inProgress.length === 0 && Queue.queue.length > 0) {
			const element = { ...Queue.queue[0] };
			console.log(element);
			setInProgress([element]);
			Queue.dequeue();
			workProcess(element);
		}
	}, [Queue, inProgress]);

	return (
		<div className='mt-4'>
			<h2 className='title'>FIFO</h2>
			<button onClick={handleAddProcess} className='add-btn'>
				Agregar proceso
			</button>
			<div className='flex w-full gap-x-2 mt-2'>
				<ProcessList list={Queue.queue} title={'En espera'} color='waiting' />
				<ProcessList list={inProgress} title={'En proceso'} color='in-progress' />
				<ProcessList list={completed} title={'Completados'} color='completed' />
			</div>
		</div>
	);
}
