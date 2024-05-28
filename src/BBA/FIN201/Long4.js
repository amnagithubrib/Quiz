
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "../ACT201/Short.css"; // Import the same or a different CSS file for styling
import Header from '../../Header';
import Footer from '../../Footer';

const BusinessFinanceLongQuestionsPage = () => {
  const { code } = useParams();

  // Example array of long questions related to business finance
  const businessFinanceLongQuestions = [
    // Add your business finance long questions here
    // Example:
    {
      question: 'Question 1: Explain the concept of financial leverage.',
      answer: 'Financial leverage refers to the use of debt financing to increase the potential return on equity. It involves using borrowed funds to magnify the impact of changes in operating income on the return to shareholders.',
    },
    {
      question: 'Question 2: Describe the key components of a financial statement.',
      answer: 'Financial statements typically include the income statement, balance sheet, and cash flow statement. The income statement shows revenues and expenses, the balance sheet displays assets, liabilities, and equity, while the cash flow statement details cash inflows and outflows.',
    },
    {
      question: 'Question 3: What is the role of financial markets in business finance?',
      answer: 'Financial markets facilitate the buying and selling of financial instruments, including stocks and bonds. They provide companies with access to capital, allow investors to trade securities, and contribute to the efficient allocation of resources in the economy.',
    },
    {
      question: 'Question 4: Explain the concept of time value of money in financial decision-making.',
      answer: 'The time value of money recognizes that a sum of money has different values at different points in time. It is a fundamental concept in financial decision-making, influencing investment appraisal, loan agreements, and other financial transactions.',
    },
    {
      question: 'Question 5: How does risk management contribute to financial decision-making?',
      answer: 'Risk management involves identifying, assessing, and mitigating potential risks that could impact a company\'s financial performance. Effective risk management contributes to informed decision-making by addressing uncertainties and protecting against adverse events.',
    },
    // Add more long questions and detailed answers as needed
  ];

  useEffect(() => {
    console.log('BusinessFinanceLongQuestionsPage rendered');
  }, []);

  return (
    <div>
      <Header />
      <div className="short-questions-container">
        <h1>Long Questions For Business Finance {code}</h1>
        {businessFinanceLongQuestions.map((qna, index) => (
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

export default BusinessFinanceLongQuestionsPage;
