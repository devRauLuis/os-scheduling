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
		<div className='mt-4 h-full flex flex-col gap-4'>
			<h2 className='title'>{title}</h2>
			<div className=''>
				<div className='p-4 bg-black rounded text-code text-sm select-none font-bold font-mono'>
					{inProgress ? (
						<>
							<div className='animate-step-rotate inline-block'>/</div>
							&nbsp; Running {inProgress.element} ({inProgress.quantum}ms).
						</>
					) : (
						<>No active processes.</>
					)}
				</div>
				<div className='mt-4'>
					<AddProcessButton onClick={handleAddProcess} />
				</div>

				<div className='h-full mt-3 flex flex-col md:flex-row gap-3'>
					<ProcessList list={pending} title={'Pending'} color='pending' />
					<ProcessList list={completed} title={'Completed'} color='completed' />
				</div>
			</div>
		</div>
	);
}

Scheduling.propTypes = {
	title: PropTypes.string.isRequired,
	handleAddProcess: PropTypes.func.isRequired,
	pending: PropTypes.arrayOf(Process).isRequired,
	inProgress: Process,
	completed: PropTypes.arrayOf(Process).isRequired,
};

