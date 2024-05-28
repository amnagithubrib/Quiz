import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../ACT201/Short.css'; // Import the same or a different CSS file for styling
import Header from '../../Header';
import Footer from '../../Footer';

const FinancialManagementShortQuestionsPage = () => {
  const { code } = useParams();

  // Example array of short questions related to financial management
  const financialManagementShortQuestions = [
    // Add your financial management short questions here
    // Example:
    'Question 1: What is financial planning?',
    'Question 2: Explain the concept of time value of money.',
    'Question 3: Define working capital management.',
    'Question 4: What are the key components of a financial budget?',
    'Question 5: Describe the role of a financial manager in financial decision-making.',
    // Add more questions as needed
  ];

  // Example array of placeholder answers for financial management
  const financialManagementAnswers = [
    // Add your financial management answers here
    // Example:
    'Financial planning involves setting financial goals and developing strategies to achieve them.',
    'The time value of money recognizes that the value of money changes over time due to factors such as interest and inflation.',
    'Working capital management involves managing a company\'s short-term assets and liabilities to ensure operational efficiency.',
    'Key components of a financial budget include revenue projections, expense forecasts, and cash flow estimates.',
    'A financial manager plays a crucial role in making financial decisions, managing resources, and maximizing shareholder wealth.',
    // Add more answers as needed
  ];

  useEffect(() => {
    console.log('FinancialManagementShortQuestionsPage rendered');
  }, []);

  return (
    <div>
      <Header />
      <div className="short-questions-container">
        <h1>Short Questions For Financial Management {code}</h1>
        {financialManagementShortQuestions.map((question, index) => (
          <div key={index} className="question-item">
            <strong>{question}</strong>
            <p className="answer">{financialManagementAnswers[index]}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default FinancialManagementShortQuestionsPage;
