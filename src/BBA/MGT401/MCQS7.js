import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../ACT201/MCQS.css'; // Import the same or a different CSS file for styling
import Question from '../ACT201/Question'; // Make sure to have the Question component in your project
import Header from '../../Header';
import Footer from '../../Footer';

const EntrepreneurshipMCQSPage = () => {
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

  const entrepreneurshipMCQS = [
    // Add your entrepreneurship MCQs here
    // Example:
    {
      question: 'What does SWOT analysis stand for?',
      options: [
        'Strengths, Weaknesses, Opportunities, Threats',
        'Sales, Workers, Objectives, Targets',
        'Strategy, Workflow, Organization, Technology',
        'Social, Workforce, Output, Training',
      ],
      correctAnswer: 'Strengths, Weaknesses, Opportunities, Threats',
    },
    {
      question: 'Which term refers to the willingness and ability to start a new business?',
      options: ['Innovation', 'Creativity', 'Entrepreneurship', 'Leadership'],
      correctAnswer: 'Entrepreneurship',
    },
    {
      question: 'What is a business plan?',
      options: [
        'A document outlining business goals and the strategy for achieving them',
        'A financial statement of a company',
        'A report on market trends',
        'A summary of daily business operations',
      ],
      correctAnswer: 'A document outlining business goals and the strategy for achieving them',
    },
    {
      question: 'Which of the following is a characteristic of successful entrepreneurs?',
      options: [
        'Risk aversion',
        'Resistance to change',
        'Proactive problem-solving',
        'Reliance on a single income source',
      ],
      correctAnswer: 'Proactive problem-solving',
    },
    {
      question: 'What is the term for the initial stage of a new business?',
      options: ['Maturity', 'Growth', 'Startup', 'Expansion'],
      correctAnswer: 'Startup',
    },
    // Add more questions with correct answers...
  ];

  return (
    <div>
      <Header />
      <div className="mcqs-container"> {/* Apply the styles from MCQS.css */}
        <h1>MCQS Quiz For Entrepreneurship ({code})</h1>
        {entrepreneurshipMCQS.map((mcq, index) => (
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

export default EntrepreneurshipMCQSPage;
