import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import "../ACT201/MCQS.css"; // Import your CSS file for styling
import Question from '../ACT201/Question';
import Header from "../../Header";
import Footer from '../../Footer';

const MathStatisticsBusinessMCQSPage = () => {
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

  const mathStatisticsBusinessMCQS = [
    // Add your Mathematics & Statistics for Business MCQs here
    // Example:
    {
      question: 'What is the formula for calculating the mean of a set of data?',
      options: [
        'Sum of values / Number of values',
        'Product of values / Number of values',
        'Sum of squares of values / Number of values',
        'Square root of the sum of squares of values',
      ],
      correctAnswer: 'Sum of values / Number of values',
    },
    // Add more questions as needed
  ];

  return (
    <div>
      <Header />
      <div className="mcqs-container">
        <h1>{code} MCQS For Mathematics & Statistics for Business</h1>
        {mathStatisticsBusinessMCQS.map((mcq, index) => (
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

export default MathStatisticsBusinessMCQSPage;
