import React from 'react';
import { VscGithub } from 'react-icons/vsc';

export default function Footer() {
	return (
		<div className={'ml-auto mt-2 inline-block'}>
			<a
				href='https://github.com/devRauLuis'
				className='text-primary opacity-70 hover:opacity-100 '>
				<VscGithub className='w-5 h-5' />
			</a>
		</div>
	);
}

