import React from 'react';
import Navigation from '../Navigation';

const Header = () => {
	return (
		<header>
			<section className='sm:flex sm:flex-wrap px-12 py-3 bg-peach-header text-blue-header'>
				<Navigation/>
				<h1 className="text-2xl font-bold text-center sm:grow sm:text-right">Eric Coleman</h1>
				
			</section>
			<div
				className="bg-banner h-40 bg-cover bg-center "
			/>
		</header>
	);
}

export default Header;