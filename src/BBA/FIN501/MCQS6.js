import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../ACT201/MCQS.css'; // Import the same or a different CSS file for styling
import Question from '../ACT201/Question'; // Update the path as per your project structure

import Header from "../../Header";
import Footer from '../../Footer';

const FinancialManagementMCQSPage = () => {
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

  const financialManagementMCQS = [
    {
      question: 'What is the goal of financial management?',
      options: [
        'Maximizing profits',
        'Maximizing shareholder wealth',
        'Increasing market share',
        'Minimizing costs',
      ],
      correctAnswer: 'Maximizing shareholder wealth',
    },
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
    {
      question: 'What is financial risk management?',
      options: [
        'Increasing financial risks for higher returns',
        'Avoiding all types of financial risks',
        'Minimizing the impact of financial risks on the firm',
        'Ignoring financial risks',
      ],
      correctAnswer: 'Minimizing the impact of financial risks on the firm',
    },
    // Add more questions with correct answers...
  ];

  return (
    <div>
      <Header />
      <div className="mcqs-container"> {/* Apply the styles from MCQS.css */}
        <h1>MCQS Quiz For Financial Management ({code})</h1>
        {financialManagementMCQS.map((mcq, index) => (
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
                  {financialManagementMCQS[questionIndex].question}: {financialManagementMCQS[questionIndex].correctAnswer}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default FinancialManagementMCQSPage;
