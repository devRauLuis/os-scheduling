import React from 'react';
import { useEffect, useState } from 'react';
import useQuantumQueue from '../customHooks/useQuantumQueue';
import { getRndNumber, getRndQuantum, processNames, delay } from '../utils';
import ProcessList from './ProcessList';
import AddProcessButton from './AddProcessButton';
import Scheduling from './Scheduling';

export default function QuantumScheduling() {
	const { Queue } = useQuantumQueue();
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

	const config = {
		title: 'Time Quantum',
		handleAddProcess,
		pending: Queue.queue,
		inProgress: inProgress[0],
		completed,
	};

	return <Scheduling {...config} />;
}

