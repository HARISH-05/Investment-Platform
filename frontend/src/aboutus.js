// AboutUs.js
import React from 'react';
import './aboutus.css'; // Import the CSS file for styling

const AboutUs = () => {
  return (
    <div className='c-body'>
    <div className="about-us-container">
      <h1>About Us</h1>
      <p>
        Welcome to our investment platform! We are committed to helping our clients achieve their financial goals
        through smart and informed investment strategies.
      </p>
      <h2>Our Mission</h2>
      <p>
        Our mission is to empower individuals to make better investment decisions by providing them with
        cutting-edge tools and educational resources.
      </p>
      <h2>Our Team</h2>
      <p>
        Our team is composed of experienced professionals in the finance and technology industries. We work
        tirelessly to ensure our platform delivers the best possible user experience.
      </p>
      <p>
        Meet our key team members:
        <p>Harish</p>
        <p>Baskaran</p>
        <p>Prasanna Kumar</p>
        {/* You can list team members here */}
      </p>
    </div>
    </div>
  );
};

export default AboutUs;
