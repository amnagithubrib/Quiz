import React from 'react';
import './Slider.css';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import slid1 from './imgs/slid1.avif';
import slid2 from './imgs/slid2.avif';
import slid3 from './imgs/slid3.avif';
import slid4 from './imgs/slid4.avif';

function NoTransitionExample() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';


  return (
    <div className={`slider-container ${isHomePage ? 'home-page' : ''}`}>
    {isHomePage && (
    <Carousel>
      <Carousel.Item>
        <img className="image-slider" src={slid1} alt="Slide 1" />
        <Card className="subject-card">
          <Card.Body>
            <Card.Title>Bachelor of Business Administration</Card.Title>
            <Card.Text>Forging future business leaders through education, innovation, and strategic expertise.

</Card.Text>
<Link to="/bba">
              <Button variant="danger">View</Button>
            </Link>
          </Card.Body>
        </Card>
      </Carousel.Item>

      <Carousel.Item>
        <img className="image-slider" src={slid2} alt="Slide 2" />
        <Card className="subject-card">
          <Card.Body>
            <Card.Title>Chartered Accountant</Card.Title>
            <Card.Text>Financial guardian, business strategist, and navigators of financial intricacies.</Card.Text>
            <Link to="/ca">
              <Button variant="danger">View</Button>
            </Link>
          </Card.Body>
        </Card>
      </Carousel.Item>

      <Carousel.Item>
        <img className="image-slider" src={slid3} alt="Slide 3" />
        <Card className="subject-card">
          <Card.Body>
            <Card.Title>Association of Chartered Certified Accountants</Card.Title>
            <Card.Text> Empowering accountants worldwide for success in finance and business.</Card.Text>
            <Link to="/acca">
              <Button variant="danger">View</Button>
            </Link>
          </Card.Body>
        </Card>
      </Carousel.Item>

      <Carousel.Item>
        <img className="image-slider" src={slid4} alt="Slide 4" />
        <Card className="subject-card">
          <Card.Body>
            <Card.Title>Bachelor of Science in Accounting and Finance</Card.Title>
            <Card.Text>Shaping financial experts for a world of opportunities.</Card.Text>
            <Link to="/finance">
              <Button variant="danger">View</Button>
            </Link>
          </Card.Body>
        </Card>
      </Carousel.Item>
    </Carousel>
     )}
     </div>
  );
}

export default NoTransitionExample;