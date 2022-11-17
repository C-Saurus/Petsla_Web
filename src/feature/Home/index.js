import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import home__banner1 from "../../asset/image/home__banner1.png"
import home__banner2  from "../../asset/image/home__banner2.png"
const Home = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <Link to={`/shop`}>
            <img style={{ width: "100%" }}
              src={home__banner1}
            />
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link to={`/shop`}>
            <img style={{ width: "100%" }}
              src={home__banner2}
            />
          </Link>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Home;