import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import "../ACT201/MCQS.css"; // Import your CSS file for styling
import Question from '../ACT201/Question';
import Header from "../../Header";
import Footer from '../../Footer';

const BCRWMCQSPage = () => {
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

  const bcrwMCQS = [
    // Add your Business Communication & Report Writing MCQs here
    // Example:
    {
      question: 'What is the purpose of a business report?',
      options: [
        'To entertain readers',
        'To provide information and analysis',
        'To criticize competitors',
        'To advertise products',
      ],
      correctAnswer: 'To provide information and analysis',
    },
    // Add more questions as needed
  ];

  return (
    <div>
      <Header />
      <div className="mcqs-container">
        <h1>{code} MCQS For Business Communication & Report Writing</h1>
        {bcrwMCQS.map((mcq, index) => (
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

export default BCRWMCQSPage;
