import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "../ACT201/Short.css";
import Header from "../../Header";
import Footer from '../../Footer';

const FinancialAccountingPage = () => {
  const { code } = useParams();

  // Example array of short questions related to financial accounting
  const financialQuestions = [
    'Question 1: What is the importance of financial accounting?',
    'Question 2: Explain the role of financial statements in decision-making.',
    'Question 3: Define cash basis accounting and its limitations.',
    'Question 4: Differentiate between financial accounting and managerial accounting.',
    'Question 5: Describe the accounting cycle in financial accounting.',
    'Question 6: Explain the concept of goodwill in financial accounting.',
    'Question 7: How are financial ratios used for financial analysis?',
    'Question 8: Define the term "amortization" in financial accounting.',
    'Question 9: What is the significance of the statement of cash flows?',
    'Question 10: Explain the principle of conservatism in financial accounting.',
    // Add more questions as needed
  ];

  // Example array of placeholder answers for financial accounting
  const financialAnswers = [
    'The importance of financial accounting lies in providing accurate and timely information about the financial performance of a business.',
    'Financial statements, such as the income statement and balance sheet, help stakeholders make informed decisions about the company.',
    'Cash basis accounting records transactions when cash is received or paid, but it has limitations in providing a complete financial picture.',
    'Financial accounting focuses on providing information to external users, while managerial accounting is more internal and helps with decision-making.',
    'The accounting cycle includes steps like journal entries, ledger posting, trial balance, adjusting entries, financial statements, and closing entries.',
    'Goodwill in financial accounting represents the excess of the purchase price over the fair value of identifiable net assets acquired in a business combination.',
    'Financial ratios, such as liquidity ratios and profitability ratios, are used to assess a company’s financial health and performance.',
    'Amortization is the systematic reduction of the value of an intangible asset over its useful life.',
    'The statement of cash flows shows the inflow and outflow of cash from operating, investing, and financing activities.',
    'The principle of conservatism suggests that in uncertain situations, accountants should choose methods that result in lower profits and lower asset values.',
    // Add more answers as needed
  ];

  useEffect(() => {
    console.log('FinancialAccountingPage rendered');
  }, []);

  return (
    <div>
      <Header />
      <div className="short-questions-container">
        <h1 className="subject-title"><b>Short Questions For Financial Accounting {code} </b></h1>
        <ul>
          {financialQuestions.map((question, index) => (
            <li key={index} className="question-item">
              <strong>{question}</strong>
              <p className="answer">{financialAnswers[index]}</p>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default FinancialAccountingPage;
