import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../ACT201/Short.css';
import Header from "../../Header";
import Footer from "../../Footer";

const FIMLongQuestionsPage = () => {
  const { code } = useParams();

  // Example array of long questions related to financial institutions & markets
  const fimLongQuestions = [
    {
      question: 'Question 1: Discuss the impact of regulatory policies on financial institutions.',
      answer: 'Regulatory policies, set by government authorities, aim to ensure the stability and integrity of financial institutions. They address issues such as capital adequacy, risk management, and consumer protection.',
    },
    {
      question: 'Question 2: Explain the concept of financial intermediation and its role in the economy.',
      answer: 'Financial intermediation involves the process of channeling funds from savers to borrowers through financial institutions. It facilitates efficient capital allocation, risk management, and economic growth.',
    },
    {
      question: 'Question 3: Analyze the role of investment banks in the underwriting process.',
      answer: 'Investment banks play a key role in the underwriting of securities, helping companies raise capital through IPOs and debt offerings. They assess risks, set offering prices, and coordinate with regulatory authorities.',
    },
    {
      question: 'Question 4: Explore the challenges faced by central banks in implementing monetary policy.',
      answer: 'Central banks face challenges such as managing inflation, ensuring financial stability, and addressing economic shocks. The effectiveness of monetary policy tools depends on economic conditions and external factors.',
    },
    {
      question: 'Question 5: Evaluate the role of financial markets in the pricing of financial instruments.',
      answer: 'Financial markets determine the prices of various instruments through the forces of supply and demand. Factors such as interest rates, market sentiment, and economic indicators influence pricing in stock, bond, and commodity markets.',
    },
    // Add more long questions and detailed answers as needed
  ];

  useEffect(() => {
    console.log('FIMLongQuestionsPage rendered');
  }, []);

  return (
    <div>
      <Header/>
      <div className="short-questions-container">
        <h1 className="subject-title"> <b>Long Questions For Financial Institutions & Markets {code}</b></h1>
        {fimLongQuestions.map((qna, index) => (
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

export default FIMLongQuestionsPage;
