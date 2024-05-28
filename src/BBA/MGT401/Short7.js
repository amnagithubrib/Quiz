import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../ACT201/Short.css'; // Import the same or a different CSS file for styling
import Header from '../../Header';
import Footer from '../../Footer';

const EntrepreneurshipShortQuestionsPage = () => {
  const { code } = useParams();

  // Example array of short questions related to entrepreneurship
  const entrepreneurshipShortQuestions = [
    // Add your entrepreneurship short questions here
    // Example:
    'Question 1: Define entrepreneurship.',
    'Question 2: What is the importance of innovation in entrepreneurship?',
    'Question 3: Explain the concept of a business model.',
    'Question 4: How does market research contribute to entrepreneurial success?',
    'Question 5: What are the key components of a feasibility study?',
    // Add more questions as needed
  ];

  // Example array of placeholder answers for entrepreneurship
  const entrepreneurshipAnswers = [
    // Add your entrepreneurship answers here
    // Example:
    'Entrepreneurship is the process of starting and running a business, typically with the aim of making a profit.',
    'Innovation is crucial in entrepreneurship as it involves introducing new ideas, products, or processes that can lead to a competitive advantage and business success.',
    'A business model outlines how a company creates, delivers, and captures value. It describes the overall strategy for sustainable business operation.',
    'Market research helps entrepreneurs understand customer needs, preferences, and market trends, enabling them to make informed business decisions.',
    'Key components of a feasibility study include market analysis, financial projections, technical requirements, legal considerations, and organizational structure.',
    // Add more answers as needed
  ];

  useEffect(() => {
    console.log('EntrepreneurshipShortQuestionsPage rendered');
  }, []);

  return (
    <div>
      <Header />
      <div className="short-questions-container">
        <h1>Short Questions For Entrepreneurship {code}</h1>
        {entrepreneurshipShortQuestions.map((question, index) => (
          <div key={index} className="question-item">
            <strong>{question}</strong>
            <p className="answer">{entrepreneurshipAnswers[index]}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default EntrepreneurshipShortQuestionsPage;
