import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../ACT201/Short.css'; // Import the same or a different CSS file for styling
import Header from '../../Header';
import Footer from '../../Footer';

const FinancialManagementLongQuestionsPage = () => {
  const { code } = useParams();

  // Example array of long questions related to financial management
  const financialManagementLongQuestions = [
    // Add your financial management long questions here
    // Example:
    {
      question: 'Question 1: What is financial planning, and why is it important for businesses?',
      answer: 'Financial planning involves the process of setting financial goals, outlining the steps needed to achieve them, and developing strategies to ensure financial success. It is crucial for businesses as it helps in budgeting, resource allocation, and decision-making.',
    },
    {
      question: 'Question 2: Explain the concept of capital budgeting and its significance in financial management.',
      answer: 'Capital budgeting is the process of evaluating and selecting long-term investment projects. It is significant as it helps businesses make informed decisions about allocating resources to projects that align with their strategic goals and generate returns.',
    },
    {
      question: 'Question 3: What role does working capital play in financial management?',
      answer: 'Working capital represents a company\'s short-term assets and liabilities. It is vital for day-to-day operations and ensures smooth business functioning. Effective working capital management is crucial for maintaining liquidity and sustaining operations.',
    },
    {
      question: 'Question 4: How does financial risk management contribute to overall financial stability?',
      answer: 'Financial risk management involves identifying, assessing, and mitigating risks that could impact a company\'s financial health. It contributes to overall financial stability by minimizing uncertainties, protecting against potential losses, and ensuring a sustainable financial position.',
    },
    {
      question: 'Question 5: Discuss the role of a Chief Financial Officer (CFO) in financial management.',
      answer: 'A Chief Financial Officer (CFO) plays a key role in financial management by overseeing financial strategies, reporting, and risk management. The CFO collaborates with other executives to make strategic financial decisions that align with the organization\'s goals.',
    },
    // Add more long questions and detailed answers as needed
  ];

  useEffect(() => {
    console.log('FinancialManagementLongQuestionsPage rendered');
  }, []);

  return (
    <div>
      <Header />
      <div className="long-questions-container">
        <h1>Long Questions For Financial Management {code}</h1>
        {financialManagementLongQuestions.map((qna, index) => (
          <div key={index} className="question-item">
            <strong>{qna.question}</strong>
            <p className="answer">{qna.answer}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default FinancialManagementLongQuestionsPage;
