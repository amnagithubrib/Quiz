import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "../ACT201/Short.css";
import Header from '../../Header';
import Footer from '../../Footer';

const BusinessFinanceShortQuestionsPage = () => {
  const { code } = useParams();

  // Example array of short questions related to business finance
  const businessFinanceShortQuestions = [
    // Add your business finance short questions here
    // Example:
    'Question 1: What is working capital?',
    'Question 2: Explain the concept of risk and return in financial management.',
    'Question 3: Define capital budgeting.',
    'Question 4: What is the difference between debt and equity financing?',
    'Question 5: Describe the role of a financial manager in a company.',
    // Add more questions as needed
  ];

  // Example array of placeholder answers for business finance
  const businessFinanceAnswers = [
    // Add your business finance answers here
    // Example:
    'Working capital is the difference between a company\'s current assets and current liabilities, representing its short-term liquidity.',
    'Risk and return refer to the trade-off between the potential for higher profits and the likelihood of incurring losses in financial investments.',
    'Capital budgeting involves evaluating and selecting long-term investment projects that align with a company\'s strategic goals.',
    'Debt financing involves borrowing money, typically through loans, while equity financing involves raising capital by issuing shares of stock.',
    'A financial manager is responsible for overseeing the financial health of a company, making investment decisions, and managing financial risks.',
    // Add more answers as needed
  ];

  useEffect(() => {
    console.log('BusinessFinanceShortQuestionsPage rendered');
  }, []);

  return (
    <div>
      <Header />
      <div className="short-questions-container">
        <h1>Short Questions For Business Finance {code}</h1>
        {businessFinanceShortQuestions.map((question, index) => (
          <div key={index} className="question-item">
            <strong>{question}</strong>
            <p className="answer">{businessFinanceAnswers[index]}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default BusinessFinanceShortQuestionsPage;
