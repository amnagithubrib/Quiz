import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../ACT201/MCQS.css'; // Import your CSS file for styling
import Question from '../ACT201/Question'; // Import your Question component

import Header from '../../Header';
import Footer from '../../Footer';

const OperationsManagementMCQSPage = () => {
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

  const operationsManagementMCQS = [
    // Add your operations management MCQs here
    // Example:
    {
      question: 'What is the primary goal of operations management?',
      options: [
        'Maximizing revenue',
        'Minimizing costs',
        'Balancing resources',
        'Customer satisfaction',
      ],
      correctAnswer: 'Customer satisfaction',
    },
    {
      question: 'What is the purpose of a Gantt chart in operations management?',
      options: [
        'Resource allocation',
        'Financial forecasting',
        'Quality control',
        'Project scheduling',
      ],
      correctAnswer: 'Project scheduling',
    },
    {
      question: 'Which of the following is a key performance indicator (KPI) for inventory management?',
      options: [
        'Customer satisfaction',
        'Order fulfillment time',
        'Advertising expenditure',
        'Employee turnover rate',
      ],
      correctAnswer: 'Order fulfillment time',
    },
    {
      question: 'What does JIT stand for in the context of operations management?',
      options: [
        'Just In Time',
        'Job Instruction Training',
        'Joint Implementation Task',
        'Juggling Inventory Techniques',
      ],
      correctAnswer: 'Just In Time',
    },
    {
      question: 'What is the purpose of a Pareto chart in quality management?',
      options: [
        'Identifying critical paths',
        'Prioritizing improvement efforts',
        'Forecasting demand',
        'Evaluating financial performance',
      ],
      correctAnswer: 'Prioritizing improvement efforts',
    },
    // Add more questions with correct answers...
  ];

  return (
    <div>
      <Header />
      <div className="mcqs-container">
        <h1>MCQs Quiz For Operations Management {code}</h1>
        {operationsManagementMCQS.map((mcq, index) => (
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

export default OperationsManagementMCQSPage;
