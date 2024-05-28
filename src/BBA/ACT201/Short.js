import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Short.css'; 
import Header from "../../Header";
import Footer from '../../Footer';

const ShortQuestionsPage = () => {
  // Use useParams to get the subject code from the URL
  const { code } = useParams();

  // Example array of short questions related to principles of accounting
  const shortQuestions = [
    'Qusetion 1 : What is the primary purpose of accounting?',
    'Qusetion 2 : Explain the accrual basis of accounting?',
    'Qusetion 3 : Define double-entry accounting?',
    'Qusetion 4 : What is the accounting equation?',
    'Qusetion 5 : Describe the concept of materiality in accounting?',
    'Qusetion 6 : Explain the difference between assets and liabilities?',
    'Qusetion 7 : What is the role of a trial balance in accounting?',
    'Qusetion 8 : Define the revenue recognition principle?',
    'Qusetion 9 : Explain the matching principle in accounting?',
    'Qusetion 10 : What is depreciation, and how is it calculated?',
    // Add more questions as needed
  ];

  // Example array of placeholder answers
  const answers = [
    'The primary purpose of accounting is to record, analyze, and communicate financial information.',
    'The accrual basis of accounting recognizes revenue and expenses when they are earned or incurred, regardless of when the cash is received or paid.',
    'Double-entry accounting is a system where every transaction is recorded in at least two accounts, ensuring that debits equal credits.',
    'The accounting equation is Assets = Liabilities + Equity, representing the fundamental relationship in accounting.',
    'Materiality in accounting refers to the significance or importance of an item in the financial statements.',
    'Assets are economic resources owned or controlled by a business, while liabilities represent obligations.',
    'A trial balance is a list of all general ledger account balances at a specific point in time, used to ensure debits equal credits.',
    'The revenue recognition principle states that revenue should be recognized when it is earned and realizable.',
    'The matching principle requires expenses to be recognized in the same period as the related revenues.',
    'Depreciation is the systematic allocation of the cost of an asset over its useful life.',
    // Add more answers as needed
  ];

  // useEffect to check the number of renders
  useEffect(() => {
    console.log('ShortQuestionsPage rendered');
  }, []);

  return (
    <div>
      <Header/>
    <div className="short-questions-container">
      <h1 className="subject-title"> <b>Short Questions For Principle Of Accounting</b></h1>
      <ul>
        {shortQuestions.map((question, index) => (
          <li key={index} className="question-item">
            <strong>{question}</strong>
            <p className="answer">{answers[index]}</p>
          </li>
        ))}
      </ul>
    </div>
    <Footer/>
    </div>
  );
};

export default ShortQuestionsPage;
