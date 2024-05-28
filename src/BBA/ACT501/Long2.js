// FinancialLongQuestionsPage.js

import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../ACT201/Short.css';
import Header from "../../Header";
import Footer from "../../Footer";

const FinancialLongQuestionsPage = () => {
  const { code } = useParams();

  // Example array of long questions related to financial accounting
  const financialLongQuestions = [
    {
      question: 'Question 1: Explain the importance of financial accounting in business.',
      answer: 'Financial accounting is crucial for businesses as it provides a systematic way to record, analyze, and communicate financial information. It helps stakeholders make informed decisions, assess the financial health of the company, and meet regulatory requirements.',
    },
    {
      question: 'Question 2: Describe the key components of financial statements.',
      answer: 'Financial statements include the income statement, balance sheet, and cash flow statement. The income statement shows revenues and expenses, the balance sheet reflects assets, liabilities, and equity, while the cash flow statement details the company\'s cash inflows and outflows.',
    },
    {
      question: 'Question 3: What is the difference between financial accounting and managerial accounting?',
      answer: 'Financial accounting focuses on providing information to external stakeholders, such as investors and regulators, while managerial accounting is more internal and assists management in decision-making. Financial accounting follows strict guidelines, while managerial accounting is more flexible.',
    },
    {
      question: 'Question 4: Explain the significance of the accounting cycle in financial accounting.',
      answer: 'The accounting cycle encompasses the steps from recording transactions to preparing financial statements. It ensures accuracy and completeness in financial reporting. Key steps include journalizing transactions, posting to ledgers, adjusting entries, and preparing the trial balance.',
    },
    {
      question: 'Question 5: How does financial accounting handle the recognition of revenue?',
      answer: 'Financial accounting follows the revenue recognition principle, which states that revenue should be recognized when it is earned and realizable. This means revenue is recorded when goods or services are delivered, and payment is reasonably assured.',
    },
    // Add more long questions and detailed answers as needed
  ];

  useEffect(() => {
    console.log('FinancialLongQuestionsPage rendered');
  }, []);

  return (
    <div>
      <Header />
      <div className="short-questions-container">
        <h1>Long Questions For Financial Accounting {code}</h1>
        {financialLongQuestions.map((qna, index) => (
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

export default FinancialLongQuestionsPage;
