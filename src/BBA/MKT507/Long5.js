import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../ACT201/Short.css'; // Import the same or a different CSS file for styling
import Header from '../../Header';
import Footer from '../../Footer';

const MarketingManagementLongQuestionsPage = () => {
  const { code } = useParams();

  // Example array of long questions related to marketing management
  const marketingManagementLongQuestions = [
    // Add your marketing management long questions here
    // Example:
    {
      question: 'Question 1: Explain the concept of market segmentation and its importance in marketing.',
      answer: 'Market segmentation involves dividing a market into distinct groups of buyers with different needs, characteristics, or behaviors. It is crucial in marketing because it allows companies to tailor their products, services, and marketing strategies to specific target audiences, improving overall effectiveness.',
    },
    {
      question: 'Question 2: Describe the stages of the product life cycle and their implications for marketing strategies.',
      answer: 'The product life cycle consists of introduction, growth, maturity, and decline stages. Each stage requires different marketing strategies. For example, in the introduction stage, focus is on building awareness, while in maturity, emphasis shifts to maintaining market share and maximizing profit.',
    },
    {
      question: 'Question 3: How does branding contribute to a company\'s marketing success?',
      answer: 'Branding creates a unique and recognizable identity for a product or company. It helps build customer loyalty, trust, and differentiation in the market. A strong brand can positively influence consumer perceptions and purchasing decisions, contributing to marketing success.',
    },
    {
      question: 'Question 4: Explain the role of digital marketing in the modern business environment.',
      answer: 'Digital marketing leverages online channels such as social media, search engines, and email to reach and engage with target audiences. It allows for precise targeting, real-time analytics, and cost-effective campaigns. In the modern business environment, digital marketing is integral to overall marketing strategies.',
    },
    {
      question: 'Question 5: Discuss the importance of customer relationship management (CRM) in marketing.',
      answer: 'CRM involves managing and nurturing relationships with customers. It helps businesses understand customer needs, preferences, and behaviors, enabling personalized marketing efforts. Effective CRM contributes to customer retention, satisfaction, and long-term business success.',
    },
    // Add more long questions and detailed answers as needed
  ];

  useEffect(() => {
    console.log('MarketingManagementLongQuestionsPage rendered');
  }, []);

  return (
    <div>
      <Header />
      <div className="long-questions-container">
        <h1>Long Questions For Marketing Management {code}</h1>
        {marketingManagementLongQuestions.map((qna, index) => (
          <div key={index} className="question-item">
            <strong>{qna.question}</strong>
            <p className="answer">{qna.answer}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default MarketingManagementLongQuestionsPage;
