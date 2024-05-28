import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "../ACT201/Short.css"; 
import Header from "../../Header";
import Footer from '../../Footer';

const FIMShortQuestionsPage = () => {
  const { code } = useParams();

  // Example array of short questions related to financial institutions & markets
  const fimShortQuestions = [
    'Question 1: Explain the role of central banks in the financial system.',
    'Question 2: What is the difference between a commercial bank and an investment bank?',
    'Question 3: Discuss the functions of the stock market.',
    'Question 4: Define monetary policy and its tools.',
    'Question 5: How do financial institutions contribute to economic growth?',
    'Question 6: Explain the concept of securitization in financial markets.',
    'Question 7: What is the purpose of credit rating agencies?',
    'Question 8: Discuss the impact of interest rates on financial markets.',
    'Question 9: How does globalization affect financial institutions?',
    'Question 10: What are the risks associated with financial derivatives?',
    // Add more questions as needed
  ];

  // Example array of placeholder answers
  const answers = [
    'Central banks, such as the Federal Reserve, play a crucial role in monetary policy, regulating banks, and maintaining financial stability.',
    'Commercial banks primarily deal with deposits and loans, while investment banks focus on underwriting and trading securities.',
    'The stock market provides a platform for buying and selling shares of publicly traded companies. It helps companies raise capital and investors participate in ownership.',
    'Monetary policy involves regulating the money supply and interest rates to control inflation and support economic objectives. Tools include open market operations and reserve requirements.',
    'Financial institutions, through lending and investment activities, contribute to economic growth by supporting businesses and infrastructure development.',
    'Securitization involves bundling financial assets into securities and selling them to investors. It helps in liquidity management and risk transfer.',
    'Credit rating agencies assess the creditworthiness of individuals and entities, providing information to investors about the risk associated with financial instruments.',
    'Interest rates impact borrowing costs, investment decisions, and bond prices in financial markets. Central banks adjust rates to influence economic conditions.',
    'Globalization exposes financial institutions to international markets, increasing opportunities and risks. It involves cross-border capital flows and interconnected financial systems.',
    'Financial derivatives, such as options and futures, carry risks related to market fluctuations, counterparty default, and systemic events.',
    // Add more answers as needed
  ];

  useEffect(() => {
    console.log('FIMShortQuestionsPage rendered');
  }, []);

  return (
    <div>
      <Header/>
      <div className="short-questions-container">
        <h1 className="subject-title"> <b>Short Questions For Financial Institutions & Markets {code}</b></h1>
        <ul>
          {fimShortQuestions.map((question, index) => (
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

export default FIMShortQuestionsPage;
