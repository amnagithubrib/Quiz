import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../ACT201/Short.css'; // Import your CSS file for styling
import Header from '../../Header';
import Footer from '../../Footer';

const MarketingManagementShortQuestionsPage = () => {
  const { code } = useParams();

  // Example array of short questions related to marketing management
  const marketingManagementShortQuestions = [
    // Add your marketing management short questions here
    // Example:
    'Question 1: What is the marketing mix?',
    'Question 2: Define market segmentation.',
    'Question 3: What is a SWOT analysis?',
    'Question 4: Explain the product life cycle.',
    'Question 5: Define branding.',
    'Question 6: What is guerrilla marketing?',
    'Question 7: What is a call-to-action (CTA) in marketing?',
    'Question 8: What is the role of market research in marketing?',
    'Question 9: What is the purpose of a marketing plan?',
    'Question 10: What is the role of social media in modern marketing?',
    // Add more questions as needed
  ];

  // Example array of placeholder answers for marketing management
  const marketingManagementAnswers = [
    // Add your marketing management answers here
    // Example:
    'The marketing mix is the combination of product, price, place, and promotion that a company uses to reach its target market.',
    'Market segmentation is the process of breaking a market into smaller, defined segments based on characteristics.',
    'A SWOT analysis is a strategic planning tool that examines strengths, weaknesses, opportunities, and threats.',
    'The product life cycle is the stages a product goes through from introduction to decline in the market.',
    'Branding is the creation of a unique name, image, and identity for a product.',
    'Guerrilla marketing is a marketing strategy that involves unconventional and low-cost tactics.',
    'A call-to-action (CTA) in marketing is a directive to make an immediate response or purchase.',
    'Market research helps understand customer needs and preferences.',
    'A marketing plan outlines marketing goals and strategies.',
    'Social media plays a key role in connecting with customers and building brand awareness.',
    // Add more answers as needed
  ];

  useEffect(() => {
    console.log('MarketingManagementShortQuestionsPage rendered');
  }, []);

  return (
    <div>
      <Header />
      <div className="short-questions-container">
        <h1>Short Questions For Marketing Management {code}</h1>
        {marketingManagementShortQuestions.map((question, index) => (
          <div key={index} className="question-item">
            <strong>{question}</strong>
            <p className="answer">{marketingManagementAnswers[index]}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default MarketingManagementShortQuestionsPage;
