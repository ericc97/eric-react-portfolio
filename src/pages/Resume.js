import React, { useState } from 'react';

const Resume = () => {

	const [myResumeSkills] = useState({
		languages: [
			{
				name: 'Javascript',
				time: '1 Year'
			}
		],
		skills: [
			'MERN Stack',
			'Github/ Github Projects',
			'Object Oriented Programming',
			'Jest',
			'HTML/CSS',
			'SQL/NoSQL',
			'Visual Studio Code',
			'PWAs',
			'RESTful API Development',
			'Bootstrap/Tailwind',
			'Express',
			'slack',
			'Mongoose',
			'GraphQL',
			'Handlebars.js',
			'Node.js',
			'Jest',
			'AWS'
		]
	});

	return (
		<main className='m-10 p-3 sm:p-5 border-4 rounded-md border-blue-header'>
			<a
				href={require('../assets/Eric-resume-2022.pdf')}
				download
				className='text-2xl rounded-lg border-slate-500 bg-gray-500 hover:bg-green-400 p-2 mt-2'
			>
				Click to Download Resume
			</a>
			<div className='mt-3'>
				<span className='text-xl'>Languages</span>
				{myResumeSkills.languages.map((language, index) => {
					return (
					<div key={`language-${index}`} className='flex justify-between w-40'>
						<div>
							- {language.name}
						</div>
						<div>
							{language.time}
						</div>
					</div>
					)
				})}
			</div>
			<div className='mt-6'>
				<span className='text-xl'>Skills/Technologies</span>
				{myResumeSkills.skills.map((skill, index) => {
					return (
						<div key={`skill-${index}`}>
							- {skill}
						</div>
					)
				})}
			</div>
		</main>
	);
}

export default Resume;