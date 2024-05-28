import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../ACT201/MCQS.css'; // Import your CSS file for styling
import Header from '../../Header';
import Footer from '../../Footer';
import Question from '../ACT201/Question';

const MarketingManagementMCQSPage = () => {
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

  const marketingManagementMCQS = [
    {
      question: 'What is the marketing mix?',
      options: [
        'The blend of different marketing strategies',
        'The set of tools used for advertising',
        'The combination of product, price, place, and promotion',
        'The total budget allocated for marketing',
      ],
      correctAnswer: 'The combination of product, price, place, and promotion',
    },
    {
      question: 'What is market segmentation?',
      options: [
        'Breaking a market into smaller, defined segments based on characteristics',
        'The process of pricing products in the market',
        'The distribution of products to different markets',
        'The competition between different markets',
      ],
      correctAnswer: 'Breaking a market into smaller, defined segments based on characteristics',
    },
    {
      question: 'What is a SWOT analysis?',
      options: [
        'A type of market research',
        'A financial analysis tool',
        'A strategic planning tool that examines strengths, weaknesses, opportunities, and threats',
        'A method for setting marketing budgets',
      ],
      correctAnswer: 'A strategic planning tool that examines strengths, weaknesses, opportunities, and threats',
    },
    {
      question: 'What is the product life cycle?',
      options: [
        'The time it takes to develop a new product',
        'The stages a product goes through from introduction to decline',
        'The lifespan of a product in the market',
        'The process of product recall',
      ],
      correctAnswer: 'The stages a product goes through from introduction to decline',
    },
    {
      question: 'What is branding?',
      options: [
        'The process of designing product labels',
        'The creation of a unique name, image, and identity for a product',
        'The distribution of products to different brands',
        'The pricing strategy for premium products',
      ],
      correctAnswer: 'The creation of a unique name, image, and identity for a product',
    },
    // Add more questions as needed
    {
      question: 'What is guerrilla marketing?',
      options: [
        'A form of marketing used in war zones',
        'A marketing strategy that involves unconventional and low-cost tactics',
        'A type of marketing agency',
        'A marketing approach focused on large-scale campaigns',
      ],
      correctAnswer: 'A marketing strategy that involves unconventional and low-cost tactics',
    },
    {
      question: 'What is a call-to-action (CTA) in marketing?',
      options: [
        'A request for customer feedback',
        'A directive to make an immediate response or purchase',
        'A marketing conference',
        'A form of advertising on TV',
      ],
      correctAnswer: 'A directive to make an immediate response or purchase',
    },
    {
      question: 'What is the role of market research in marketing?',
      options: [
        'To create marketing slogans',
        'To analyze competitor products',
        'To understand customer needs and preferences',
        'To design marketing budgets',
      ],
      correctAnswer: 'To understand customer needs and preferences',
    },
    {
      question: 'What is the purpose of a marketing plan?',
      options: [
        'To set sales targets',
        'To allocate funds for advertising',
        'To outline marketing goals and strategies',
        'To manage product inventory',
      ],
      correctAnswer: 'To outline marketing goals and strategies',
    },
    {
      question: 'What is the role of social media in modern marketing?',
      options: [
        'To replace traditional advertising methods',
        'To connect with customers and build brand awareness',
        'To conduct market research',
        'To handle customer complaints',
      ],
      correctAnswer: 'To connect with customers and build brand awareness',
    },
  ];

  return (
    <div>
      <Header />
      <div className="mcqs-container">
        <h1>{code} MCQS For Marketing Management</h1>
        {marketingManagementMCQS.map((mcq, index) => (
          <Question
            key={index}
            question={mcq.question}
            options={mcq.options}
            correctAnswer={mcq.correctAnswer}
            onSelect={(selectedOption, isCorrect) =>
              handleOptionSelect(index, selectedOption, isCorrect)
            }
          />
        ))}
        <button className="submit-button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default MarketingManagementMCQSPage;
