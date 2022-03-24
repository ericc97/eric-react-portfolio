import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const Navigation = () => {

	const [selectionBorder, setSelection] = useState({selection: 'about', style: 'border-2 border-orange-hl rounded-sm'});

	const changeSelection = (selection) => {
		setSelection({
			...selectionBorder,
			selection});
	}

	return (
		<nav className='grow pt-1'>
			<ul className='text-center sm:flex sm:flex-nowrap text-xl sm:justify-beginning justify-beginning'>
				<li className={`px-1 hover:bg-blue-300 sm:px-2 ${(selectionBorder.selection === 'about') ? selectionBorder.style : 'border-2 border-transparent'}`}>
					<Link onClick={() => changeSelection('about')} to="/Portfolio/">About Me</Link>
				</li>
				<li className={`px-1 hover:bg-blue-300 sm:px-2 ${(selectionBorder.selection === 'projects') ? selectionBorder.style : 'border-2 border-transparent'}`}>
					<Link onClick={() => changeSelection('projects')} to="/Portfolio/projects">Projects</Link>
				</li>
				<li className={`px-1 hover:bg-blue-300 sm:px-2 ${(selectionBorder.selection === 'contact') ? selectionBorder.style : 'border-2 border-transparent'}`}>
					<Link onClick={() => changeSelection('contact')} to="/Portfolio/contact">Contact</Link>
				</li>
				<li className={`px-1 hover:bg-blue-300 sm:px-2 ${(selectionBorder.selection === 'resume') ? selectionBorder.style : 'border-2 border-transparent'}`}>
					<Link onClick={() => changeSelection('resume')} to="/Portfolio/resume">Resume</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Navigation;