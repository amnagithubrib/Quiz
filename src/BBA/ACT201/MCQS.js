import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './MCQS.css'; // Import your CSS file for styling
import Header from '../../Header';
import Footer from "../../Footer";
import Question from './Question';

const MCQS = () => {
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

  const mcqs = [
    {
      question: 'What is the primary purpose of accounting?',
      options: [
        'To create financial statements',
        'To record financial transactions',
        'To manage human resources',
        'To market products',
      ],
      correctAnswer: 'To record financial transactions',
    },
    {
      question: 'Which of the following is a liability?',
      options: ['Cash', 'Accounts Receivable', 'Inventory', 'Accounts Payable'],
      correctAnswer: 'Accounts Payable',
    },
    {
      question: 'What does ROI stand for?',
      options: [
        'Return on Investment',
        'Rate of Interest',
        'Risk of Inflation',
        'Revenue of Income',
      ],
      correctAnswer: 'Return on Investment',
    },
    {
      question: 'Which accounting principle states that revenue should be recognized when earned and expenses when incurred?',
      options: [
        'Matching Principle',
        'Revenue Recognition Principle',
        'Consistency Principle',
        'Materiality Principle',
      ],
      correctAnswer: 'Revenue Recognition Principle',
    },
    {
      question: 'What is the formula for calculating Net Income?',
      options: [
        'Net Income = Revenue - Expenses',
        'Net Income = Revenue + Expenses',
        'Net Income = Assets - Liabilities',
        'Net Income = Liabilities - Assets',
      ],
      correctAnswer: 'Net Income = Revenue - Expenses',
    },
    {
      question: 'Which financial statement shows a company\'s financial position at a specific point in time?',
      options: [
        'Income Statement',
        'Statement of Cash Flows',
        'Balance Sheet',
        'Statement of Retained Earnings',
      ],
      correctAnswer: 'Balance Sheet',
    },
    {
      question: 'What is the purpose of the trial balance?',
      options: [
        'To prepare financial statements',
        'To identify errors in the accounting records',
        'To calculate taxes',
        'To create budgets',
      ],
      correctAnswer: 'To identify errors in the accounting records',
    },
    {
      question: 'Which of the following is considered a long-term liability?',
      options: [
        'Accounts Payable',
        'Short-term loans',
        'Notes Payable',
        'Accrued Liabilities',
      ],
      correctAnswer: 'Notes Payable',
    },
    {
      question: 'In accounting, what does FIFO stand for?',
      options: [
        'First In, First Out',
        'Final Inventory and Financial Operations',
        'Financial Inventory Flow Operations',
        'Funds In and Out',
      ],
      correctAnswer: 'First In, First Out',
    },
    {
      question: 'What is the purpose of depreciation in accounting?',
      options: [
        'To increase asset values',
        'To decrease liability values',
        'To allocate the cost of an asset over its useful life',
        'To calculate interest expenses',
      ],
      correctAnswer: 'To allocate the cost of an asset over its useful life',
    },
    {
      question: 'Which financial statement reports the revenues and expenses for a specific period?',
      options: [
        'Income Statement',
        'Balance Sheet',
        'Statement of Cash Flows',
        'Statement of Retained Earnings',
      ],
      correctAnswer: 'Income Statement',
    },
    {
      question: 'What is the accounting equation?',
      options: [
        'Assets = Liabilities + Equity',
        'Revenue = Expenses',
        'Income = Cash Flow',
        'Profit = Loss',
      ],
      correctAnswer: 'Assets = Liabilities + Equity',
    },
    {
      question: 'What is the purpose of the Statement of Cash Flows?',
      options: [
        'To report the financial position of a company',
        'To provide information about a company\'s cash receipts and cash payments',
        'To disclose changes in equity',
        'To analyze the profitability of a company',
      ],
      correctAnswer: 'To provide information about a company\'s cash receipts and cash payments',
    },
    {
      question: 'Which accounting principle requires that the economic substance of a transaction be recorded over its legal form?',
      options: [
        'Materiality Principle',
        'Consistency Principle',
        'Matching Principle',
        'Substance Over Form Principle',
      ],
      correctAnswer: 'Substance Over Form Principle',
    },
    {
      question: 'What is the purpose of an audit in accounting?',
      options: [
        'To prepare financial statements',
        'To ensure compliance with tax regulations',
        'To detect and prevent fraud',
        'To calculate profitability ratios',
      ],
      correctAnswer: 'To detect and prevent fraud',
    },
    {
      question: 'Which financial statement shows the changes in equity over a specific period?',
      options: [
        'Income Statement',
        'Balance Sheet',
        'Statement of Cash Flows',
        'Statement of Retained Earnings',
      ],
      correctAnswer: 'Statement of Retained Earnings',
    },
    {
      question: 'What is the purpose of the Sarbanes-Oxley Act in accounting?',
      options: [
        'To regulate the accounting profession',
        'To enhance corporate governance and financial disclosures',
        'To establish accounting standards',
        'To calculate tax liabilities',
      ],
      correctAnswer: 'To enhance corporate governance and financial disclosures',
    },
    {
      question: 'Which of the following is a contra account?',
      options: [
        'Accumulated Depreciation',
        'Accounts Payable',
        'Prepaid Expenses',
        'Common Stock',
      ],
      correctAnswer: 'Accumulated Depreciation',
    },
    {
      question: 'What is the purpose of the double-entry accounting system?',
      options: [
        'To track changes in equity',
        'To record each financial transaction in at least two accounts',
        'To calculate financial ratios',
        'To prepare tax returns',
      ],
      correctAnswer: 'To record each financial transaction in at least two accounts',
    },
    {
      question: 'Which accounting standard-setting body issues International Financial Reporting Standards (IFRS)?',
      options: [
        'Financial Accounting Standards Board (FASB)',
        'International Accounting Standards Board (IASB)',
        'Generally Accepted Accounting Principles (GAAP)',
        'Securities and Exchange Commission (SEC)',
      ],
      correctAnswer: 'International Accounting Standards Board (IASB)',
    },
    // Add more questions as needed
  ];
  

  return (
    <div>
      <Header />
      <div className="mcqs-container">
        <h1>{code} MCQS For Principle Of Accounting</h1>
        {mcqs.map((mcq, index) => (
          <Question
            key={index}
            question={mcq.question}
            options={mcq.options}
            correctAnswer={mcq.correctAnswer}
            onSelect={(selectedOption, isCorrect) => handleOptionSelect(index, selectedOption, isCorrect)}
          />
        ))}
        <button className="submit-button" onClick={handleSubmit}>
          Submit
        </button>
        
      </div>
      <Footer/>
    </div>
  );
};

export default MCQS;
