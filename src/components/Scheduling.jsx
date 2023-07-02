import React from 'react';
import ProcessList from './ProcessList';
import AddProcessButton from './AddProcessButton';
import PropTypes from 'prop-types';
import { Process } from '../propTypes';

export default function Scheduling({
	title,
	handleAddProcess,
	pending,
	inProgress,
	completed,
}) {
	return (
		<div className='mt-4 h-full'>
			<h2 className='title'>{title}</h2>
			<AddProcessButton onClick={handleAddProcess} />
			<div className='flex flex-col h-full md:flex w-full gap-4 mt-2'>
				<ProcessList list={pending} title={'Pending'} color='pending' />
				<ProcessList
					list={inProgress}
					title={'In progress'}
					color='in-progress'
				/>
				<ProcessList list={completed} title={'Completed'} color='completed' />
			</div>
		</div>
	);
}

Scheduling.propTypes = {
	title: PropTypes.string.isRequired,
	handleAddProcess: PropTypes.func.isRequired,
	pending: PropTypes.arrayOf(Process).isRequired,
	inProgress: PropTypes.arrayOf(Process).isRequired,
	completed: PropTypes.arrayOf(Process).isRequired,
};

