import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <Link to={`/shop`}>
            <img style={{ width: "100%" }}
              src="https://www.leoasher.dev/static/media/banner2.caec085c.png"
            />
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link to={`/shop`}>
            <img style={{ width: "100%" }}
              src="https://www.leoasher.dev/static/media/banner1.237a7309.png"
            />
          </Link>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Home;