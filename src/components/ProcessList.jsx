import React from 'react';
import PropTypes from 'prop-types';
import { getRndNumber } from '../utils';

export default function ProcessList({ list, title, color }) {
	return (
		<div className={'font-semibold rounded max-h-[25%]'}>
			<h3 className={'text-lg text-white text-center rounded-t bg-secondary'}>
				{title}
			</h3>
			<div className='overflow-y-scroll border-b-2 border-r-2 border-l-2 border-secondary rounded-b max-h-[90%]'>
				{!(list.length > 0) ? (
					<div className='text-slate-500 px-2 my-2.5 text-center'>...</div>
				) : (
					list.map(
						(process) =>
							process && (
								<div
									key={
										process.element + process.quantum + getRndNumber(1, 9999)
									}
									className='px-2 mt-2.5 last:my-2.5 flex justify-between'>
									{process.priority && (
										<h4 className='text-sm font-bold'>{process.priority}</h4>
									)}

									<h4 className=''>{process.element}</h4>

									<p className='text-sm'>{process.quantum}ms</p>

									<div className={'px-2 ' + color}></div>
								</div>
							)
					)
				)}
			</div>
		</div>
	);
}

ProcessList.propTypes = {
	list: PropTypes.array.isRequired,
	title: PropTypes.string.isRequired,
	color: PropTypes.string,
};

