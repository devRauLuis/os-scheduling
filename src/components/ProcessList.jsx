import React from 'react';
import PropTypes from 'prop-types';
import { getRndNumber } from '../utils';

export default function ProcessList({ list, title, color }) {
	return (
		<div className='h-[25vh] lg:h-[50vh] w-full rounded flex flex-col'>
			<h3 className='text-white text-center rounded-t bg-secondary py-1.5 font-semibold'>
				{title}
			</h3>
			<div className='overflow-y-auto border-b-2 border-r-2 border-l-2 border-secondary rounded-b flex-grow h-full'>
				{!(list.length > 0) ? (
					<div className='text-slate-500 px-2 my-2.5 text-center'>...</div>
				) : (
					list.map((process) => {
						return (
							<div
								key={process.element + process.quantum + getRndNumber(1, 9999)}
								className={`px-3 mt-2.5 last:my-2.5 grid ${
									process.priority
										? 'grid-cols-[.5fr_repeat(3,_1fr)]'
										: 'grid-cols-3'
								} items-center`}>
								{process.priority && (
									<p className='text-sm font-bold '>{process.priority}</p>
								)}

								<h4 className=''>{process.element}</h4>

								<p className='text-sm justify-self-center'>
									{process.quantum}ms
								</p>

								<div
									className={
										'rounded-full w-2.5 h-2.5 justify-self-end ' + color
									}></div>
							</div>
						);
					})
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

