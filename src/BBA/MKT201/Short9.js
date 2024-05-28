import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../ACT201/Short.css'; // Import your CSS file for styling
import Header from '../../Header';
import Footer from '../../Footer';

const PrinciplesOfMarketingShortQuestionsPage = () => {
  const { code } = useParams();

  // Example array of short questions related to Principles of Marketing
  const principlesOfMarketingShortQuestions = [
    'Question 1: Define marketing and explain its importance in business.',
    'Question 2: What is a target market, and why is it essential for marketing strategies?',
    'Question 3: Explain the concept of the product life cycle.',
    'Question 4: What is branding, and how does it influence consumer behavior?',
    'Question 5: Describe the role of pricing in the marketing mix.',
    // Add more questions as needed
  ];

  // Example array of placeholder answers for Principles of Marketing
  const principlesOfMarketingAnswers = [
    'Marketing is the process of creating, communicating, delivering, and exchanging offerings that have value for customers, clients, partners, and society at large. It is crucial for business success as it facilitates product awareness, customer satisfaction, and revenue generation.',
    'A target market is a specific group of potential customers that a business aims to reach with its products and marketing messages. Identifying a target market is essential for tailoring marketing strategies to meet the needs and preferences of that particular group.',
    'The product life cycle represents the stages a product goes through from introduction to decline. These stages include introduction, growth, maturity, and decline. Understanding the product life cycle helps in making strategic marketing decisions.',
    'Branding is the process of creating a unique name, design, and image for a product or service in the consumer\'s mind. It influences consumer behavior by creating brand recognition, loyalty, and perceived value.',
    'Pricing is a crucial element in the marketing mix that involves setting the right price for a product or service. It influences consumer perception, profitability, and market competitiveness.',
    // Add more answers as needed
  ];

  useEffect(() => {
    console.log('PrinciplesOfMarketingShortQuestionsPage rendered');
  }, []);

  return (
    <div>
      <Header />
      <div className="short-questions-container">
        <h1>Short Questions For Principles of Marketing ({code})</h1>
        {principlesOfMarketingShortQuestions.map((question, index) => (
          <div key={index} className="question-item">
            <strong>{question}</strong>
            <p className="answer">{principlesOfMarketingAnswers[index]}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default PrinciplesOfMarketingShortQuestionsPage;
