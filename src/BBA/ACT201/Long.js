// LongQuestionsPage.js

import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Short.css';
import Header from "../../Header";
import Footer from "../../Footer";

const LongQuestionsPage = () => {
  // Use useParams to get the subject code from the URL
  const { code } = useParams();

  // Example array of long questions related to principles of accounting
  const longQuestions = [
    {
      question: 'Question 1: Explain the accrual basis of accounting.',
      answer: 'The accrual basis of accounting recognizes revenues and expenses when they are earned or incurred, regardless of when the cash is received or paid. This method provides a more accurate representation of a company\'s financial position and performance over a specific period.',
    },
    {
      question: 'Question 2: Define double-entry accounting.',
      answer: 'Double-entry accounting is a system where every transaction affects at least two accounts. For every debit entry, there is a corresponding credit entry, ensuring that the accounting equation (Assets = Liabilities + Equity) remains balanced.',
    },
    {
      question: 'Question 3: What is the accounting equation?',
      answer: 'The accounting equation is Assets = Liabilities + Equity, representing the fundamental relationship in accounting. It ensures that a company\'s assets are funded by a combination of debt (liabilities) and owner\'s equity.',
    },
    {
      question: 'Question 4: Explain the concept of materiality in accounting.',
      answer: 'Materiality refers to the significance or importance of an item, transaction, or information in financial statements. If an item is material, its omission or misstatement could influence the decisions of users. Accountants consider materiality when preparing financial statements.',
    },
    {
      question: 'Question 5: What is the role of a trial balance in accounting?',
      answer: 'A trial balance is a list of all general ledger accounts and their balances. Its primary role is to ensure that the total debits equal total credits, providing a preliminary check for errors in the accounting system before preparing financial statements.',
    },
    // Add more long questions and detailed answers as needed
  ];

  // useEffect to check the number of renders
  useEffect(() => {
    console.log('LongQuestionsPage rendered');
  }, []);

  return (
    <div>
      <Header/>
      <div className="short-questions-container"> {/* Use the same container class */}
        <h1> Long Questions For Principle Of Accounting</h1>
        {longQuestions.map((qna, index) => (
          <div key={index} className="question-item">
            <strong>{qna.question}</strong>
            <p className="answer">{qna.answer}</p>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default LongQuestionsPage;
