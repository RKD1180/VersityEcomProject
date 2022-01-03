import React from "react";
import { Button, Carousel } from "react-bootstrap";
import sli1 from "../../../img/slider1.jpg";
import sli2 from "../../../img/b7.png";
import sli3 from "../../../img/b8.png";
import { Link } from "react-router-dom";

const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height={500}
          src={sli1}
          alt="First slide"
        />
        <Carousel.Caption>
          <Link to="">
            <Button variant="warning" size="lg">
              Explore Now
            </Button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height={500}
          src={sli2}
          alt="First slide"
        />

        <Carousel.Caption>
          <Link to="">
            <Button variant="warning" size="lg">
              Explore Now
            </Button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height={500}
          src={sli3}
          alt="First slide"
        />

        <Carousel.Caption>
          <Link to="">
            <Button variant="warning" size="lg">
              Explore Now
            </Button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
