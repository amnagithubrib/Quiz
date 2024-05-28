import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Header from "./Header";
import Footer from "./Footer";

import './BBA/Bba.css';

const ACCASubjects = () => {
  const papers = [
    { code: 'FM101', title: 'Financial Management' },
    { code: 'TX101', title: 'Taxation' },
    { code: 'ATX501', title: 'Advanced Taxation' },
    { code: 'FR501', title: 'Financial Reporting' },
    { code: 'AA501', title: 'Audit and Assurance ' },
    { code: 'PM502', title: 'Performance Management' },
    { code: 'CBL501', title: 'Corporate and Business Law' },
    { code: 'SBL101', title: 'Strategic Business Leader' },
    { code: 'SBR123', title: 'Strategic Business Reporting' },
    { code: 'AFM120', title: 'Advanced Financial Management' },
    { code: 'APM120', title: 'Advanced Performance Management' },
    { code: 'AAA123', title: 'Advanced Audit and Assurance' },
  ];

  return (
    <div>
      <Header />
      <h1>ACCA Degree Subjects</h1>
      <div className="card-container">
        {papers.map((paper) => (
          <PaperCard
            key={paper.code}
            code={paper.code}
            title={paper.title}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

const PaperCard = ({ code, title }) => {
  const handleMCQsClick = () => {
    alert(`MCQs for ${title}`);
  };

  const handleShortQuestionsClick = () => {
    alert(`Short Questions for ${title}`);
  };

  const handleLongQuestionsClick = () => {
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

export default ACCASubjects;
