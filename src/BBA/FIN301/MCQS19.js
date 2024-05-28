import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import "../ACT201/MCQS.css"; // Import your CSS file for styling
import Question from '../ACT201/Question';
import Header from "../../Header";
import Footer from '../../Footer';

const IslamicBankingMCQSPage = () => {
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

  const islamicBankingMCQS = [
    // Add your Islamic Banking & Finance MCQs here
    // Example:
    {
      question: 'What is the fundamental principle of Islamic banking?',
      options: [
        'Interest-based financing',
        'Profit and loss sharing',
        'Fixed interest rates',
        'Securitization of debts',
      ],
      correctAnswer: 'Profit and loss sharing',
    },
    // Add more questions as needed
  ];

  return (
    <div>
      <Header />
      <div className="mcqs-container">
        <h1>{code} MCQS For Islamic Banking & Finance</h1>
        {islamicBankingMCQS.map((mcq, index) => (
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

export default IslamicBankingMCQSPage;
