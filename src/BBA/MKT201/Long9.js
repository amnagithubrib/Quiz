import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../ACT201/Short.css'; // Import your CSS file for styling
import Header from '../../Header';
import Footer from '../../Footer';

const PrinciplesOfMarketingLongQuestionsPage = () => {
  const { code } = useParams();

  // Example array of long questions related to Principles of Marketing
  const principlesOfMarketingLongQuestions = [
    {
      question: 'Question 1: Discuss the concept of the marketing mix and its components.',
      answer: 'The marketing mix, also known as the 4Ps, consists of Product, Price, Place, and Promotion. These elements work together to create a comprehensive marketing strategy. Product refers to the actual goods or services offered, Price is the amount customers pay, Place involves distribution channels, and Promotion includes advertising and communication strategies.',
    },
    {
      question: 'Question 2: Explain the importance of market research in marketing decision-making.',
      answer: 'Market research is crucial for marketing decision-making as it provides insights into customer needs, preferences, and market trends. It helps businesses understand their target audience, evaluate competition, and make informed decisions about product development, pricing, and promotional strategies.',
    },
    {
      question: 'Question 3: What role does digital marketing play in the modern business environment?',
      answer: 'Digital marketing utilizes online channels and technologies to promote products and services. It plays a vital role in the modern business environment by reaching a global audience, enabling targeted advertising, providing real-time analytics, and enhancing customer engagement through social media and other digital platforms.',
    },
    {
      question: 'Question 4: Discuss the ethical considerations in marketing and the impact of ethical practices on brand reputation.',
      answer: 'Ethical considerations in marketing involve making honest and transparent decisions that prioritize customer well-being. Ethical practices contribute to a positive brand reputation, customer trust, and long-term success. Unethical practices, such as false advertising, can lead to legal issues and damage a brand\'s image.',
    },
    {
      question: 'Question 5: How does integrated marketing communication (IMC) contribute to a unified brand message?',
      answer: 'Integrated Marketing Communication (IMC) involves coordinating and integrating various communication channels to deliver a consistent and unified brand message. It ensures that all aspects of marketing communication work together, including advertising, public relations, sales promotion, and direct marketing, to convey a cohesive brand image.',
    },
    // Add more long questions and detailed answers as needed
  ];

  useEffect(() => {
    console.log('PrinciplesOfMarketingLongQuestionsPage rendered');
  }, []);

  return (
    <div>
      <Header />
      <div className="long-questions-container">
        <h1>Long Questions For Principles of Marketing ({code})</h1>
        {principlesOfMarketingLongQuestions.map((qna, index) => (
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

export default PrinciplesOfMarketingLongQuestionsPage;
