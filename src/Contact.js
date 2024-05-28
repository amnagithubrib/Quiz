import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Contact.css";
import Form from "react-bootstrap/Form";
import {GoMail} from "react-icons/go";
import {BsFillTelephoneFill} from "react-icons/bs";
import {BiTimeFive} from "react-icons/bi";
import {FaUser} from "react-icons/fa";
import {FaEnvelope} from "react-icons/fa";
import {FaComment} from "react-icons/fa";
import InputGroup from 'react-bootstrap/InputGroup';
import Header from "./Header";
import Footer from "./Footer";
function ContainerExample() {
  return (
    <div>
        <Header/>
    <Container >
      <Row style={{paddingTop:50}}>
        <Col sm={5} className='booting' style={{paddingTop:70}}>
          <h4>Contact Us</h4>
          <h5 className='booting2'>____</h5>
          <h5 className='booting'><GoMail style={{color:'red'}}/>  sales@mcmga.com.au</h5>
          <h6 className='booting'><BsFillTelephoneFill  style={{color:'red'}}/> 1300 85 16 17</h6>
          <h5 className='booting'><BiTimeFive  style={{color:'red'}}/> Monday-Frida:y 9am-5pm</h5>
        </Col>

        <Col style={{backgroundColor:'rgb(245,245,245)', paddingTop:10}} sm={6} className='bbt'><h3 className='ter'>Send Us A Message</h3>
        <h1 style={{color:'red'}}>_____</h1>
        <Form>
            <p ><div className='form-group'>
  <label>*Name:</label>
  <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1"><FaUser  size={20 } style={{color:'red'} }/></InputGroup.Text>
        <Form.Control required
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
    </div></p>
    <p ><div className='form-group'>
  <label> *Email:</label>
  <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1"><FaEnvelope size={20 } style={{color:'red'} }/></InputGroup.Text>
        <Form.Control
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
    
    </div></p>
    <p ><div className='form-group'>
  <label> *Message:</label>
  <InputGroup  className="mb-3" style={{height:100}}>
        <InputGroup.Text id="basic-addon1"><FaComment size={20 } style={{color:'red'} }/></InputGroup.Text>
        <Form.Control 
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
   
    </div></p>
  
    <button  type="button" className='btn btn-light'>Submit</button>
    <p></p>
</Form>
        </Col>
      </Row>
    </Container>
    <Footer/>
    </div>
  );
}

export default ContainerExample;