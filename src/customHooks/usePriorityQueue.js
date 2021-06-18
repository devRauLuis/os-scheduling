import { useState } from 'react';

const usePriorityQueue = (initialState = []) => {
	const [queue, setQueue] = useState(initialState);

	const enqueue = (element, priority, quantum) => {
		const newNode = { element, priority, quantum };
		let contain = false;
		for (let index = 0; index < queue.length; index++) {
			const element = queue[index];
			if (element.priority > newNode.priority) {
				setQueue([...queue.slice(0, index), newNode, ...queue.slice(index)]);
				contain = true;
				break;
			}
		}
		if (!contain) setQueue([...queue, newNode]);
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
		PriorityQueue: {
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

export default usePriorityQueue;
