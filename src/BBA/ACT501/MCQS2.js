// MCQS.js

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import "../ACT201/MCQS.css"; // Import your CSS file for styling
import Question from '../ACT201/Question';

import Header from "../../Header";
import Footer from '../../Footer';

const MCQS = () => {
  const { code } = useParams();
  const [responses, setResponses] = useState({});

  const handleOptionSelect = (question, selectedOption, correctAnswer) => {
    setResponses((prevResponses) => ({
      ...prevResponses,
      [question]: { selectedOption, correctAnswer },
    }));
  };

  const handleSubmit = () => {
    console.log('User Responses:', responses);
    alert('MCQs submitted!');
  };

  const mcqs = [
    {
      question: 'What is the formula for calculating net income?',
      options: ['Revenue - Expenses', 'Assets - Liabilities', 'Income - Taxes', 'Profit + Loss'],
      correctAnswer: 'Revenue - Expenses',
    },
    {
      question: 'What is the primary purpose of accounting?',
      options: ['To create financial statements', 'To record financial transactions', 'To manage human resources', 'To market products'],
      correctAnswer: 'To record financial transactions',
    },
    {
      question: 'Which accounting principle states that revenue should be recognized when it is earned?',
      options: ['Matching Principle', 'Revenue Recognition Principle', 'Cost Principle', 'Conservatism Principle'],
      correctAnswer: 'Revenue Recognition Principle',
    },
    {
      question: 'What type of account is "Accounts Payable"?',
      options: ['Asset', 'Liability', 'Equity', 'Revenue'],
      correctAnswer: 'Liability',
    },
    {
      question: 'In financial accounting, what does GAAP stand for?',
      options: ['Generally Accepted Accounting Principles', 'Global Accounting and Auditing Practices', 'Governmental Accounting and Auditing Procedures', 'General Accounting and Auditing Protocols'],
      correctAnswer: 'Generally Accepted Accounting Principles',
    },
    // Add more questions with correct answers...
  ];

  return (
    <div>
      <Header/>
    <div className="mcqs-container"> {/* Apply the styles from MCQS.css */}
      <h1>MCQS Quiz For Financial Accounting ({code})</h1>
      {mcqs.map((mcq, index) => (
        <Question
          key={index}
          question={mcq.question}
          options={mcq.options}
          correctAnswer={mcq.correctAnswer}
          onSelect={(selectedOption) => handleOptionSelect(index, selectedOption, mcq.correctAnswer)}
        />
      ))}
      <button className="submit-button" onClick={handleSubmit}>
        Submit
      </button>
      {Object.keys(responses).length > 0 && (
        <div>
        
          <ul>
            {Object.keys(responses).map((questionIndex) => (
              <li key={questionIndex}>
                {mcqs[questionIndex].question}: {mcqs[questionIndex].correctAnswer}
              </li>
            ))}
          </ul>
        </div>
      )}
      </div>
      <Footer/>
    </div>
  );
};

export default MCQS;
