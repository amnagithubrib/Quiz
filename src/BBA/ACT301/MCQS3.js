// CostAccountingMCQS.js

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import "../ACT201/MCQS.css"; // Import your CSS file for styling
import Header from '../../Header';
import Footer from "../../Footer";
import Question from "../ACT201/Question";

const CostAccountingMCQS = () => {
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

  const costAccountingMCQS = [
    {
      question: 'What is the purpose of cost accounting in business?',
      options: [
        'To prepare financial statements',
        'To track the cost of production',
        'To manage human resources',
        'To analyze market trends',
      ],
      correctAnswer: 'To track the cost of production',
    },
    {
      question: 'Which cost is considered a variable cost?',
      options: ['Direct materials', 'Rent', 'Salaries of permanent staff', 'Depreciation'],
      correctAnswer: 'Direct materials',
    },
    {
      question: 'What is the formula for calculating the break-even point?',
      options: [
        'Break-even Point = Fixed Costs / Variable Costs',
        'Break-even Point = Total Revenue - Total Costs',
        'Break-even Point = Fixed Costs / (Selling Price per Unit - Variable Cost per Unit)',
        'Break-even Point = Total Costs / Total Revenue',
      ],
      correctAnswer: 'Break-even Point = Fixed Costs / (Selling Price per Unit - Variable Cost per Unit)',
    },
    {
      question: 'What is the purpose of standard costing in cost accounting?',
      options: [
        'To calculate actual costs',
        'To set predetermined cost standards',
        'To prepare financial statements',
        'To analyze market competition',
      ],
      correctAnswer: 'To set predetermined cost standards',
    },
    {
      question: 'Which of the following is an example of a fixed cost?',
      options: [
        'Direct labor',
        'Raw materials',
        'Utilities (electricity, water)',
        'Sales commissions',
      ],
      correctAnswer: 'Utilities (electricity, water)',
    },
    // Add more questions as needed
  ];

  return (
    <div>
      <Header />
      <div className="mcqs-container">
        <h1> MCQS For Cost Accounting {code}</h1>
        {costAccountingMCQS.map((mcq, index) => (
          <Question
            key={index}
            question={mcq.question}
            options={mcq.options}
            correctAnswer={mcq.correctAnswer}
            onSelect={(selectedOption, isCorrect) => handleOptionSelect(index, selectedOption, isCorrect)}
          />
        ))}
        <button className="submit-button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      <Footer/>
    </div>
  );
};

export default CostAccountingMCQS;
