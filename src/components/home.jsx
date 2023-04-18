import React from "react";
const Home = () => {
  return (
    <>
      <h1 className="h3 mb-5 fw-normal">Welcome to Movly</h1>
      <p>
        Movly is a fictive movie library intended to demonstrate some of my
        react JS knowledge aquired along my training.
      </p>
      <p>
        First, you want to create a user account that grants you access to a few
        extra functionalities such as likes or editing movies details. Some of
        these functionalities are admin only and may appear disabled to you.
      </p>
      <p>
        The movies page is all about filtering, sorting and displaying the
        correct data according to the user preference. Lodash utility functions
        helped me simplifying this task thanks to methods chaining and the range
        method. As mentionned earlier, you have the possiblity to edit the data
        by clicking on the movie title of your choice once you are logged in.
        Entries are checked against a front-end and back-end API validation
        schema before being store on the db.
      </p>
      <p>
        This training project gave me the chance to practice the implementation
        of forms and data validation for user registration and authentication
        with json web tokens.
      </p>
      <p>
        I used Axios to carry out HTTP requests to the API endpoints. The API is
        build on express JS as well as the help of mongoose for data casting and
        validation.
      </p>
      <p>
        Finally, the style and layout is handle with bootstrap for efficiency.
        It is minimalist and mobile first library, it gives a consistent
        experience to the user on various medias.
      </p>
    </>
  );
};

export default Home;
