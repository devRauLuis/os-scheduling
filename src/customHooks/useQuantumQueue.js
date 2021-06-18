import { useState } from 'react';

const useQuantumQueue = (initialState = []) => {
	const [queue, setQueue] = useState(initialState);

	const enqueue = (element, quantum) => {
		const newNode = { element, quantum };
		setQueue((q) => [...q, newNode].sort((a, b) => a.quantum - b.quantum));
	};

	const dequeue = () => {
		if (!isEmpty()) {
			console.log('Dequeing ', queue[0]);
			setQueue([...queue.filter((element) => element !== queue[0])]);
		}
	};

	const front = () => {
		if (!isEmpty()) return queue[0];
	};

	const rear = () => {
		if (!isEmpty()) return queue[queue.length - 1];
	};
	const isEmpty = () => {
		return queue.length === 0;
	};

	const print = () => {
		let str = '';
		for (let index = 0; index < queue.length; index++) {
			const element = queue[index].element;
			str += element;
		}
		return str;
	};
	return {
		Queue: {
			queue,
			front,
			rear,
			enqueue,
			dequeue,
			isEmpty,
			print,
		},
	};
};

export default useQuantumQueue;
