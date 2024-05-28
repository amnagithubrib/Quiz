import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import "../ACT201/MCQS.css"; // Import your CSS file for styling
import Header from '../../Header';
import Footer from '../../Footer';
import Question from "../ACT201/Question";

const BusinessFinanceMCQSPage = () => {
  const { code } = useParams();
  const [responses, setResponses] = useState({});

  const handleOptionSelect = (questionIndex, selectedOption, isCorrect) => {
    setResponses((prevResponses) => ({
      ...prevResponses,
      [questionIndex]: { selectedOption, isCorrect },
    }));
  };

  const handleSubmit = () => {
    console.log('User Responses:', responses);
    alert('MCQs submitted!');
  };

  const businessFinanceMCQS = [
    // Add your business finance MCQs here
    {
      question: 'What is the time value of money?',
      options: [
        'A concept in financial accounting',
        'The idea that money available today is worth more than the same amount in the future',
        'A banking principle',
        'A government regulation on interest rates',
      ],
      correctAnswer: 'The idea that money available today is worth more than the same amount in the future',
    },
    // Add more questions as needed
    {
      question: 'What is the purpose of financial ratio analysis?',
      options: [
        'To calculate taxes',
        'To evaluate a company\'s financial performance and position',
        'To regulate financial markets',
        'To determine employee salaries',
      ],
      correctAnswer: 'To evaluate a company\'s financial performance and position',
    },
    {
      question: 'Which financial statement reports a company\'s revenues and expenses over a specific period?',
      options: [
        'Balance Sheet',
        'Income Statement',
        'Statement of Cash Flows',
        'Statement of Retained Earnings',
      ],
      correctAnswer: 'Income Statement',
    },
    {
      question: 'What does the debt-to-equity ratio measure?',
      options: [
        'A company\'s liquidity',
        'The efficiency of operations',
        'The proportion of debt relative to equity in a company\'s capital structure',
        'The return on investment',
      ],
      correctAnswer: 'The proportion of debt relative to equity in a company\'s capital structure',
    },
    {
      question: 'In finance, what does the term "diversification" refer to?',
      options: [
        'A financial scam',
        'The process of reducing risk by investing in a variety of assets',
        'A type of financial security',
        'The calculation of compound interest',
      ],
      correctAnswer: 'The process of reducing risk by investing in a variety of assets',
    },
  ];

  return (
    <div>
      <Header />
      <div className="mcqs-container">
        <h1>{code} MCQS For Business Finance</h1>
        {businessFinanceMCQS.map((mcq, index) => (
          <Question
            key={index}
            question={mcq.question}
            options={mcq.options}
            correctAnswer={mcq.correctAnswer}
            onSelect={(selectedOption, isCorrect) =>
              handleOptionSelect(index, selectedOption, isCorrect)
            }
          />
        ))}
        <button className="submit-button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default BusinessFinanceMCQSPage;
