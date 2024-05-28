// BbaSubjects.js

import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Header from "./Header";
import Footer from "./Footer";
import './BBA/Bba.css';

const BbaSubjects = () => {
  const subjects = [
    { code: 'CAF-1', title: 'Financial Accounting and Reporting 1 ' },
    { code: 'CAF-5', title: 'Financial Accounting and Reporting 2' },
    { code: 'CFAP-1', title: 'Advance Accounting and Financial Reporting' },
    { code: 'CFAP-6', title: 'Audit, Assurance and Related Services' },
    { code: 'CAF-2', title: 'Cost and Management Accounting' },
    
    { code: 'CAF-4', title: 'Mercantile Law' },
    { code: 'MKT201', title: 'Principles of Marketing' },
    
    { code: 'CAF-7', title: 'Company Law' },
    { code: 'CAF-8', title: 'Audit and Assurance' },

    { code: 'CFAP-2', title: 'Corporate Laws' },
    { code: 'CFAP-3', title: 'Strategy Performance Measurement' },
    { code: 'CAF-6', title: 'Managerial and Financial Analysis' },
    { code: 'CFAP-4', title: 'Business Finance Decisions' },
    { code: 'CFAP-5', title: 'Tax Planning and Practices' },

    
  ];

  return (
    <div>
      <Header />
      <h1>CA Degree Subjects</h1>
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