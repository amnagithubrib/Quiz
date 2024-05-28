import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../ACT201/MCQS.css'; // Import your CSS file for styling
import Question from '../ACT201/Question';
import Header from '../../Header';
import Footer from '../../Footer';

const PrinciplesOfMarketingMCQsPage = () => {
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

  const principlesOfMarketingMCQs = [
    {
      question: 'What is the marketing mix?',
      options: [
        'Product, Price, Place, Promotion',
        'Planning, Production, Profit, People',
        'Public Relations, Partnerships, Profit, Placement',
        'Process, Perception, Packaging, Pricing',
      ],
      correctAnswer: 'Product, Price, Place, Promotion',
    },
    {
      question: 'What is the purpose of market segmentation?',
      options: [
        'To divide the market into small, homogeneous groups',
        'To combine multiple markets into one',
        'To ignore variations in customer needs',
        'To decrease competition',
      ],
      correctAnswer: 'To divide the market into small, homogeneous groups',
    },
    // Add more questions as needed
  ];

  return (
    <div>
      <Header />
      <div className="mcqs-container">
        <h1>MCQs Quiz For Principles of Marketing ({code})</h1>
        {principlesOfMarketingMCQs.map((mcq, index) => (
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

export default PrinciplesOfMarketingMCQsPage;
