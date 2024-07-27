import React from 'react';
import { Carousel } from 'react-bootstrap';

const HomePage = () => (
  <div>
    <header className="bg-primary text-white text-center py-5">
      <h1>Springdale Public School</h1>
      <p>Welcome to Springdale Public School, where we nurture young minds for a brighter future.</p>
    </header>

    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src="sportsday.jpg" alt="First slide" />
        <Carousel.Caption>
          <h3>Annual Sports Day</h3>
          <p>Celebrating Excellence in Sports</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="scienceexhibition.jpg" alt="Second slide" />
        <Carousel.Caption>
          <h3>Science Exhibition</h3>
          <p>Showcasing Student Innovations</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="culturalfest.jpg" alt="Third slide" />
        <Carousel.Caption>
          <h3>Cultural Fest</h3>
          <p>Embracing Diversity and Creativity</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <div className="container mt-5">
      <h2>Quick Links</h2>
      <ul>
        <li><a href="/about-us">About Us</a></li>
        <li><a href="/academics">Academics</a></li>
        <li><a href="/admissions">Admissions</a></li>
      </ul>
    </div>
  </div>
);

export default HomePage;
