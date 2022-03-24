import React, {useState} from 'react';
import Project from '../components/Project';

const Projects = () => {

	const [projectsArr] = useState([
		{
			name: 'DevSpark',
			github: 'https://github.com/ericc97/devspark',
			image: 'bg-devspark',
			live: 'https://devsparkio.herokuapp.com/',
			description: 'SQL,NODE.js,Express.js,Nodemailer,Socket.io'
		},
		{
			name: 'Football App',
			github: 'https://github.com/ericc97/football-app-project-1',
			image: 'bg-footballapp',
			live: 'https://ericc97.github.io/football-app-project-1/',
			description: "HTML/CSS/3rd Part API's/"
		},
		{
			name: 'Catro-Gaming',
			github: 'https://github.com/JoelKovalcson/Catro-Gaming',
			image: 'bg-catrogaming',
			live: 'https://catro-gaming.herokuapp.com',
			description: "Node.js/Express.js/Apollo Server/GraphQL"
		},
		{
			name: 'Coming soon...',
			github: '',
			image: 'bg-banner',
			live: '',
			description: 'Future Projects'
		}
	]);

	const projects = [];
	for(let i = 0; i < projectsArr.length; i++) {
		projects.push(<Project key={`Project-${i}`} project={projectsArr[i]}/>)
	}

	return (
		<main className="h-auto mx-3 sm:mx-8 my-5 grid grid-cols-1 md:grid-cols-2 justify-center p-5  bg-blue-header">
			{projects}
		</main>
	);
}

export default Projects;