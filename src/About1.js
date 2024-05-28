import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import A1 from './imgs/A1.jpg';
import Header from "./Header";
import Footer from "./Footer";

import "./About.css";
import { FaReact } from 'react-icons/fa';
import { AiFillBulb } from 'react-icons/ai';

function About() {
  return (
    <div>
        <Header/>
    
    <Container className='i'>
      <Row>
        <Col  ClassName='s'  sm={6}><h2 className='ter'>About Us</h2> <br></br>
        <p> Welcome to Ready to Quiz, where learning meets excitement! Dive into a world of captivating
            quizzes tailored for trivia lovers and knowledge enthusiasts. Join our vibrant community, 
            explore diverse topics, and challenge yourself. Embrace the thrill of learning with every question.
             Ready to elevate your quiz experience? Let the games begin at Ready to Quiz!</p>
            <Row>
            <br></br>
            <Col><h2 className='ter'><AiFillBulb/>Our Vision</h2> 
            <p>Our vision is to create a dynamic hub where curiosity meets knowledge. 
            We strive to inspire a global community to embrace learning, challenge themselves. Ready to elevate your quiz experience? Let the games begin at Ready to Quiz!</p></Col>
            <Col><h2 className='ter'><FaReact />Our Mission</h2>
            <p>The same professional approach is employed across
             all sectors, whether it be commercial, construction 
             or maintenance contracts. We pride ourselves on the 
             relationships we have established with our clients</p>
            </Col>
            </Row></Col>
            
             <Col>
          <Image sm={6} src={A1} className="imag" style={{ height: '450px'}} />
        </Col>
      
      </Row>
    </Container>
    <Footer/>
    </div>
  );
}

export default About;