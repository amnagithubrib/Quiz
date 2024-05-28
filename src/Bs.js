// BbaSubjects.js

import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Header from "./Header";
import Footer from "./Footer";
import './BBA/Bba.css';

const BbaSubjects = () => {
  const subjects = [
    { code: 'ACC111', title: 'Principles of Accounting' },
    { code: 'ACC201', title: 'Financial Accounting' },
    { code: 'ACC381', title: 'Management Accounting' },
    { code: 'LAW205', title: 'Business Law' },
    { code: 'LAW303', title: 'Taxation(Direct&Indirect)' },

    { code: 'ACC301', title: 'Independent study (Accounting)' },
    { code: 'ACC507', title: 'Accounting Information System with SAP' },
    { code: 'FIN310', title: 'Independent study (Finance)' },
    { code: 'FIN574', title: 'Financial Modeling' },
    { code: 'FIN201', title: 'Introduction to Business Finance' },
    { code: 'FIN301', title: 'Financial Institutions and Markets' },
    { code: 'FIN558', title: 'Regulations & Financial Markets' },
    // Add more subjects as needed
  ];

  return (
    <div>
      <Header />
      <h1>Bachelor in Accounting and Finance </h1>
      <div className="card-container">
        {subjects.map((subject) => (
          <SubjectCard
            key={subject.code}
            code={subject.code}
            title={subject.title}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

const SubjectCard = ({ code, title }) => {
  const handleMCQsClick = () => {
    // Placeholder for MCQs button functionality
    alert(`MCQs for ${title}`);
  };

  const handleShortQuestionsClick = () => {
    // Placeholder for Short Questions button functionality
    alert(`Short Questions for ${title}`);
  };

  const handleLongQuestionsClick = () => {
    // Placeholder for Long Questions button functionality
    alert(`Long Questions for ${title}`);
  };

  return (
    <Card style={{ width: '18rem', margin: '10px', backgroundColor: '#f0f0f0' }}>
      <Card.Body>
        <Card.Title>
          <div><strong>{code}</strong></div>
          <div>{title}</div>
        </Card.Title>
        <div className="button-container">
          <Button variant="primary" onClick={handleMCQsClick}>
            MCQs
          </Button>
          <Button variant="info" onClick={handleShortQuestionsClick}>
            Short 
          </Button>
          <Button variant="success" onClick={handleLongQuestionsClick}>
            Long 
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default BbaSubjects;
