import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "../ACT201/Short.css"; 
import Header from "../../Header";
import Footer from '../../Footer';

const IslamicBankingShortQuestionsPage = () => {
  const { code } = useParams();

  // Example array of short questions related to Islamic Banking & Finance
  const islamicBankingShortQuestions = [
    'Question 1: Explain the concept of Shariah-compliant financing.',
    'Question 2: What are the key differences between conventional banking and Islamic banking?',
    'Question 3: Discuss the principles of Mudarabah and Musharakah in Islamic finance.',
    'Question 4: How does Islamic banking handle risk-sharing compared to conventional banking?',
    'Question 5: Describe the role of the Shariah board in Islamic financial institutions.',
    'Question 6: What is Takaful, and how does it differ from conventional insurance?',
    'Question 7: Explore the concept of Riba and its prohibition in Islamic finance.',
    'Question 8: How do Islamic banks structure home financing without charging interest?',
    'Question 9: Discuss the challenges and opportunities facing the Islamic banking industry globally.',
    'Question 10: Explain the concept of Sukuk in Islamic finance.',
    // Add more questions as needed
  ];

  // Example array of placeholder answers
  const answers = [
    'Shariah-compliant financing adheres to Islamic principles, ensuring that financial transactions and investments comply with Islamic law.',
    'Islamic banking differs from conventional banking by prohibiting interest (Riba) and emphasizing profit and loss sharing, ethical investments, and asset-backed financing.',
    'Mudarabah and Musharakah are Islamic financing principles. Mudarabah involves profit-sharing, and Musharakah involves joint venture partnerships.',
    'Islamic banking emphasizes risk-sharing, where both the bank and the customer share profits and losses. Conventional banking often relies on fixed interest rates.',
    'The Shariah board ensures that Islamic financial institutions operate in accordance with Islamic principles and ethical standards.',
    'Takaful is an Islamic insurance system based on mutual assistance and shared responsibility, distinguishing it from conventional insurance.',
    'Riba refers to interest or usury and is prohibited in Islamic finance to ensure fairness and avoid exploitation.',
    'Islamic banks use structures like Murabahah and Ijara for home financing, avoiding interest while facilitating homeownership.',
    'Islamic banking faces challenges such as global regulatory variations but offers opportunities for ethical and sustainable finance.',
    'Sukuk are Islamic financial instruments similar to bonds, representing ownership in an asset or project rather than debt.',
    // Add more answers as needed
  ];

  useEffect(() => {
    console.log('IslamicBankingShortQuestionsPage rendered');
  }, []);

  return (
    <div>
      <Header />
      <div className="short-questions-container">
        <h1>Short Questions For Islamic Banking & Finance {code}</h1>
        {islamicBankingShortQuestions.map((question, index) => (
          <div key={index} className="question-item">
            <strong>{question}</strong>
            <p className="answer">{answers[index]}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default IslamicBankingShortQuestionsPage;
