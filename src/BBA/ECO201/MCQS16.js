import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import "../ACT201/MCQS.css"; // Import your CSS file for styling
import Question from '../ACT201/Question';
import Header from "../../Header";
import Footer from '../../Footer';

const MicroeconomicsMCQSPage = () => {
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

  const microeconomicsMCQS = [
    // Add your Principles of Microeconomics MCQs here
    // Example:
    {
      question: 'What is the law of demand?',
      options: [
        'As price increases, quantity demanded decreases',
        'As price increases, quantity demanded increases',
        'Price and quantity demanded are unrelated',
        'There is no such thing as the law of demand',
      ],
      correctAnswer: 'As price increases, quantity demanded decreases',
    },
    // Add more questions as needed
  ];

  return (
    <div>
      <Header />
      <div className="mcqs-container">
        <h1>{code} MCQS For Principles of Microeconomics</h1>
        {microeconomicsMCQS.map((mcq, index) => (
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

export default MicroeconomicsMCQSPage;
