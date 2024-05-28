import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import "../ACT201/MCQS.css"; // Import your CSS file for styling
import Question from '../ACT201/Question';
import Header from "../../Header";
import Footer from '../../Footer';

const MacroeconomicsMCQSPage = () => {
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

  const macroeconomicsMCQS = [
    // Add your Principles of Macroeconomics MCQs here
    // Example:
    {
      question: 'What is Gross Domestic Product (GDP)?',
      options: [
        'The total value of all goods and services produced within a country in a specific time period',
        'The total value of all exports and imports of a country',
        'The total wealth of the citizens in a country',
        'The total value of all stocks and bonds in a country',
      ],
      correctAnswer: 'The total value of all goods and services produced within a country in a specific time period',
    },
    // Add more questions as needed
  ];

  return (
    <div>
      <Header />
      <div className="mcqs-container">
        <h1>{code} MCQS For Principles of Macroeconomics</h1>
        {macroeconomicsMCQS.map((mcq, index) => (
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

export default MacroeconomicsMCQSPage;
