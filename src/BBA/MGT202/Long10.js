import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../ACT201/Short.css';
import Header from "../../Header";
import Footer from "../../Footer";

const PrinciplesManagementLongQuestionsPage = () => {
  const { code } = useParams();

  // Example array of long questions related to principles of management
  const principlesManagementLongQuestions = [
    {
      question: 'Question 1: Discuss the evolution of management theories.',
      answer: 'Management theories have evolved over time, from classical approaches (scientific management, administrative management) to behavioral, quantitative, and modern approaches (systems theory, contingency theory). Each theory reflects the changing perspectives on managing organizations.',
    },
    {
      question: 'Question 2: Explain the principles of scientific management by Frederick Taylor.',
      answer: 'Scientific management emphasizes time and motion studies to optimize work processes. Taylor introduced principles like scientific selection of workers, standardization of tools, and piece-rate incentives to improve efficiency.',
    },
    {
      question: 'Question 3: Describe the Hawthorne experiments and their impact on management thinking.',
      answer: 'The Hawthorne experiments, conducted at Western Electric, revealed the influence of social and human factors on productivity. They highlighted the significance of employee attitudes, group dynamics, and the Hawthorne effect in workplace performance.',
    },
    {
      question: 'Question 4: Compare and contrast leadership styles - autocratic, democratic, and laissez-faire.',
      answer: 'Autocratic leadership involves central decision-making, democratic leadership values employee input, and laissez-faire leadership allows autonomy. Each style has its advantages and drawbacks, influencing organizational culture and employee morale.',
    },
    {
      question: 'Question 5: Analyze the role of ethics and social responsibility in management.',
      answer: 'Ethics in management involves making morally sound decisions, while social responsibility extends beyond profit-making to consider the impact of organizational actions on society. Both contribute to sustainable and ethical business practices.',
    },
    // Add more long questions and detailed answers as needed
  ];

  useEffect(() => {
    console.log('PrinciplesManagementLongQuestionsPage rendered');
  }, []);

  return (
    <div>
      <Header />
      <div className="short-questions-container">
        <h1>Long Questions For Principles of Management {code}</h1>
        {principlesManagementLongQuestions.map((qna, index) => (
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

export default PrinciplesManagementLongQuestionsPage;
