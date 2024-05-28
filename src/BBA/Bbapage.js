import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Header from '../Header';
import Footer from '../Footer';
import { Link } from 'react-router-dom';
import './Bba.css';

const buttonStyle = {
  backgroundColor: '#e42929',
  padding: '10px 20px',
  color: '#ffffff',
  margin: '0 5px',
};

const BbaSubjects = () => {
  const subjects = [
    { code: 'ACT201', title: 'Principles of Accounting' },
    { code: 'ACT501', title: 'Financial Accounting' },
    { code: 'ACT301', title: 'Cost Accounting' },
    { code: 'FIN201', title: 'Business Finance' },
    { code: 'MKT507', title: 'Marketing Management' },
    
    { code: 'FIN501', title: 'Financial Management' },
    { code: 'MGT401', title: 'Entrepreneurship' },
    { code: 'MGT507', title: 'Operations Management' },
    { code: 'MKT201', title: 'Principles of Marketing' },
    
    { code: 'MGT202', title: 'Principles Management' },
    { code: 'MGT502', title: 'Human Resource Management' },
    { code: 'MGT501', title: 'Organizational Behaviour' },
    
    { code: 'MGT506', title: 'Business Research Methods' },
    { code: 'FIN505', title: 'Financial Institutions & Markets' },
    { code: 'GEN501', title: 'Bus. Comm. & Report Writing' },
    { code: 'ECO201', title: 'Principles of Microeconomics' },
    { code: 'ECO202', title: 'Principles of Macroeconomics' },
    
    { code: 'GEN303', title: 'Creative Thinking and Reasoning' },
    { code: 'FIN301', title: 'Islamic Banking & Finance' },
    { code: 'QNT501', title: 'Mathematics & Statistics for Business' },
    // Add more subjects as needed
  ];
  

  return (
    <div>
      <Header />
      <h1>BBA Degree Subjects</h1>
      <div className="card-container">
        {subjects.map((subject) => (
          <SubjectCard key={subject.code} code={subject.code} title={subject.title} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

const SubjectCard = ({ code, title }) => {
  

  return (
    <Card style={{ width: '18rem', margin: '10px', backgroundColor: '#f0f0f0' }}>
      <Card.Body>
        <Card.Title>
          <div><strong>{code}</strong></div>
          <div>{title}</div>
        </Card.Title>
        <div className="custom-button-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}>
          <Link to={`/bba/${code.toLowerCase()}/mcqs`}>
            <Button variant="primary" size="sm" style={buttonStyle}>
              MCQS
            </Button>
          </Link>
          <Link to={`/bba/${code.toLowerCase()}/short-questions`}>
            <Button variant="info" size="sm" style={buttonStyle}>
              Short
            </Button>
          </Link>
          <Link to={`/bba/${code.toLowerCase()}/long-questions`}>
          <Button variant="success" size="sm" style={buttonStyle} >
            Long
          </Button>
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default BbaSubjects;
