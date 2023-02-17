import React from "react";
const Home = () => {
	return <div className="mb-2">
		<h1 className="h3 mb-5 fw-normal">Welcome to Movly</h1>
		<p>Movly is a fictive react application intended to demonstrate some of my react JS knowledge aquired along my training.</p>
		<p>First, you want to create a user account that grants you access to a few extra functionalities such as adding movies to the database of the movies page. Some of these functionalities are admin only and may appear disabled to you.</p>
		<p>The movies page is mostly about filtering, sorting and displaying the correct data according to the user preference. Lodash utility functions helped me to simplify this task thanks to methods chaining and the range method. You have the possiblity to modify the data of the movies once you are logged in, entries are checked against a validation schema before being transmitted to the server.</p>
		<p>This training project gave me the chance to practice the implementation of forms and data validation for user registration and authentication with json web tokens.</p>
		<p>I used Axios to carry out HTTP requests to the API endpoints. The API is build on express JS as well as the help of mongoose for data casting and validation.</p>
		<p>Finally, I used bootstrap for the style. It is minimalist and mobile first, it gives a consistent experience to the user on various medias.</p>
	</div>;
};

export default Home;
