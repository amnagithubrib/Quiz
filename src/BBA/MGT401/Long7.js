import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../ACT201/Short.css'; // Import the same or a different CSS file for styling
import Header from '../../Header';
import Footer from '../../Footer';

const EntrepreneurshipLongQuestionsPage = () => {
  const { code } = useParams();

  // Example array of long questions related to entrepreneurship
  const entrepreneurshipLongQuestions = [
    // Add your entrepreneurship long questions here
    // Example:
    {
      question: 'Question 1: Explain the entrepreneurial process.',
      answer: 'The entrepreneurial process involves identifying opportunities, developing a business idea, creating a business plan, securing resources, launching the business, and managing its growth and sustainability.',
    },
    {
      question: 'Question 2: Discuss the role of creativity and innovation in entrepreneurship.',
      answer: 'Creativity is the ability to generate new and unique ideas, while innovation is the implementation of those ideas into practical solutions. Both are crucial in entrepreneurship for developing unique products or services and staying competitive.',
    },
    {
      question: 'Question 3: What are the key challenges faced by entrepreneurs?',
      answer: 'Entrepreneurs face challenges such as access to funding, market competition, uncertainty, managing growth, and adapting to changing market conditions. Overcoming these challenges requires strategic planning and resilience.',
    },
    {
      question: 'Question 4: Explain the importance of a business plan for entrepreneurs.',
      answer: 'A business plan serves as a roadmap for entrepreneurs, outlining their business goals, target market, marketing strategy, financial projections, and operational plan. It helps in attracting investors, securing loans, and guiding the business toward success.',
    },
    {
      question: 'Question 5: How does social entrepreneurship differ from traditional entrepreneurship?',
      answer: 'Social entrepreneurship focuses on addressing social or environmental issues through innovative business models. It differs from traditional entrepreneurship by emphasizing a dual bottom line – achieving both financial and social impact.',
    },
    // Add more long questions and detailed answers as needed
  ];

  useEffect(() => {
    console.log('EntrepreneurshipLongQuestionsPage rendered');
  }, []);

  return (
    <div>
      <Header />
      <div className="long-questions-container">
        <h1>Long Questions For Entrepreneurship {code}</h1>
        {entrepreneurshipLongQuestions.map((qna, index) => (
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

export default EntrepreneurshipLongQuestionsPage;
