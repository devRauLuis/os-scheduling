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
import AddProcessButton from './AddProcessButton';
import Scheduling from './Scheduling';

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

	const config = {
		title: 'Priority',
		handleAddProcess,
		pending: PriorityQueue.queue,
		inProgress: inProgress[0],
		completed,
	};

	return <Scheduling {...config} />;
}

