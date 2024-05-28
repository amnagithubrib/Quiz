import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from "react-bootstrap/Image";

import BBA from "./imgs/BBA.jpg"; // Replace with your BBA image
import CA from "./imgs/CA.jpg";  // Replace with your ACCA image
import ACCA from "./imgs/ACCA.png";  // Replace with your CA image
import BS from "./imgs/BS.PNG";  // Replace with your BS Accounting image
import './Grid.css';

function Grid() {
  return (
    <Container fluid>
      <Row className='CO'>
        {/* BBA Section */}
        <Col style={{ paddingTop: 50 }}>
          <div className="circle">
            <Image src={BBA} fluid />
          </div>
          <h4 className='io'>BBA</h4>
          <p className='pa'>
            The Bachelor of Business Administration (BBA) program provides a comprehensive understanding of business concepts. Students gain insights into management, finance, marketing, and entrepreneurship. This program equips graduates for diverse roles in the business world, fostering leadership and critical thinking skills.
          </p>
        </Col>

        {/* ACCA Section */}
        <Col style={{ paddingTop: 50 }}>
          <div className="circle">
            <Image src={ACCA} fluid />
          </div>
          <h4 className='io'>ACCA</h4>
          <p className='pa'>
            The Association of Chartered Certified Accountants (ACCA) program is globally recognized for producing skilled and ethical finance professionals. ACCA covers accounting, finance, audit, and tax. Graduates are prepared for roles in accounting firms, corporations, and financial institutions.
          </p>
        </Col>

        {/* CA Section */}
        <Col style={{ paddingTop: 50 }}>
          <div className="circle">
            <Image src={CA} fluid />
          </div>
          <h4 className='io'>CA</h4>
          <p className='pa'>
            The Chartered Accountant (CA) program is a prestigious qualification in accounting and finance. CA professionals are experts in financial reporting, audit, and taxation. Completing the CA program opens doors to leadership roles in accounting firms, corporations, and consulting.
          </p>
        </Col>

        {/* BS Finance Section */}
        <Col style={{ paddingTop: 50 }}>
          <div className="circle">
            <Image src={BS} fluid />
          </div>
          <h4 className='io'>BS Finance</h4>
          <p className='pa'>
            The Bachelor of Science (BS) in Finance program provides in-depth knowledge of financial markets, investment strategies, and risk management. Graduates are well-prepared for careers in investment banking, financial analysis, and corporate finance.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Grid;
