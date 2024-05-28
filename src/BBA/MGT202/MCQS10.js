import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import "../ACT201/MCQS.css"; // Import your CSS file for styling
import Question from '../ACT201/Question';

import Header from "../../Header";
import Footer from '../../Footer';

const PrinciplesManagementMCQSPage = () => {
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

  const principlesManagementMCQS = [
    {
      question: 'What is the definition of management?',
      options: [
        'The process of achieving organizational goals through the effective use of people and other resources.',
        'The art of making money.',
        'Controlling people.',
        'Doing paperwork.',
      ],
      correctAnswer: 'The process of achieving organizational goals through the effective use of people and other resources.',
    },
    {
      question: 'Who is known as the father of modern management?',
      options: [
        'Frederick Taylor',
        'Elton Mayo',
        'Max Weber',
        'Henry Fayol',
      ],
      correctAnswer: 'Henry Fayol',
    },
    // Add more questions as needed
  ];

  return (
    <div>
      <Header />
      <div className="mcqs-container">
        <h1>{code} MCQS For Principles of Management</h1>
        {principlesManagementMCQS.map((mcq, index) => (
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

export default PrinciplesManagementMCQSPage;
