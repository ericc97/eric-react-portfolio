import React from 'react';

const About = () => {

	return (
		<main className="">
			<div>
			<img
				className='mt-40 absolute lg:mb-0 lg:mr-5 max-h-96 object-cover aspect-square '
				src={require('../assets/Eric.png')}
				alt="Eric's Cover Pic"
			/>
			</div>
			
			<p className='text-center text-lg mr-96'>
				Hi, my name is
			</p>
			<h1 className="text-center p-2 text-7xl mr-40">
				Eric Coleman
			</h1>
			<div className='w-96 p-2 pb-12 mr-96 ml-auto'>
				<h3>
				I'm a software developer from Austin, Texas currently living in Nashville, Tennessee. I recently graduated from the Vanderbilt University full-stack coding bootcamp. I'm excited to use my backend development experience to contribute, improve and maintain code bases for potential companies.
				</h3>
				<br></br>
				<h3>Interests:</h3>
				<p>Node.js, Express.js, SQL( MySQL, Sequelize), NoSQL(Mongoose/Mongo.db,Graph.QL)</p>
				<br></br>
				<h3>Hobbies:</h3>
				<p>
					Rock climbing, Mountain Biking, Snowboarding, Hiking, Camping
				</p>

			</div>
			
			
		</main>
		
	);
}

export default About;