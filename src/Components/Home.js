import React from "react";
import logo from "../logo.png";
import { Carousel } from "react-bootstrap";
import image1 from "../Components/assets/images/1.png";
import image2 from "../Components/assets/images/2.png";
import image3 from "../Components/assets/images/3.png";
import image4 from "../Components/assets/images/4.png";
import image5 from "../Components/assets/images/5.png";
import image6 from "../Components/assets/images/6.png";

function Home() {
  return (
    <>
      <img className="logo" src={logo} alt="logo..." />   
      <Carousel >
        <Carousel.Item interval={1000}>
          <img className="Slider" src={image1} alt="First slide" />
          <Carousel.Caption>
            <h3>Computer Science & Engineering</h3>
            <p>A picture of Artificial Intelligence</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img className="Slider"src={image2} alt="Second slide" />
          <Carousel.Caption>
            <h3>Civil Engineering</h3>
            <p>A picture of AutoCad</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="Slider"  src={image3} alt="Third slide" />
          <Carousel.Caption>
            <h3>Electronics & Communication Engineering</h3>
            <p>A picture representation on Circuit Board</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="Slider"  src={image4} alt="Forth slide" />
          <Carousel.Caption>
            <h3>Electrical Engineering</h3>
            <p>A picture representation on wire connection</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="Slider" src={image5} alt="Fifth slide" />
          <Carousel.Caption>
            <h3>Mechanical Engineering</h3>
            <p>A picture representation on motorvehicle testing</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="Slider"  src={image6} alt="Sixth slide" />
          <Carousel.Caption>
            <h3>Basic Science & Humanity</h3>
            <p>A picture representation on Chemistry Lab</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Home;
