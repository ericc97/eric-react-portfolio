import React from 'react';

const Project = (props) => {
	console.log(props.project.image);
	return (
		<div className={`${props.project.image} grid content-between bg-cover m-2 w-auto h-60 md:h-96 opacity-80 hover:opacity-100`}>
			<div className='sm:w-max font-bold border-r-2 border-b-2 border-orange-hl'>
				<div className='bg-darkgrey p-1 flex'>
					<a 
						href={props.project.live}
						className="text-2xl text-orange-hl hover:text-offwhite">
							{props.project.name}
					</a>
					<a
						href={props.project.github}
						alt={`Link to repository for project ${props.project.name}`}
					>
						<img
							src={require('../../assets/github-logo-light.png')}
							alt="Link to GitHub repo"
							className="ml-1 mt-1 h-6 opacity-70 hover:opacity-100"
						/>
					</a>
				</div>
			</div>
			<div className='text-right text-offwhite bg-darkgrey sm:w-max px-1 text-xl border-t-2 border-r-2 border-orange-hl'>
				{props.project.description}
			</div>
		</div>
	);
}

export default Project;