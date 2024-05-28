import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../ACT201/Short.css'; 
import Header from "../../Header";
import Footer from '../../Footer';

const MicroeconomicsShortQuestionsPage = () => {
  const { code } = useParams();

  // Example array of short questions related to Principles of Microeconomics
  const microeconomicsShortQuestions = [
    'Question 1: Explain the concept of opportunity cost.',
    'Question 2: Define elasticity of demand. How is it calculated?',
    'Question 3: Discuss the factors that can shift the demand curve.',
    'Question 4: What is a perfectly competitive market?',
    'Question 5: Describe the difference between explicit and implicit costs.',
    'Question 6: How does the production possibilities frontier illustrate scarcity?',
    'Question 7: What is the law of diminishing marginal returns?',
    'Question 8: Explain the concept of a monopoly.',
    'Question 9: Discuss the factors that can shift the supply curve.',
    'Question 10: Define the concept of utility in economics.',
    // Add more questions as needed
  ];

  // Example array of placeholder answers
  const answers = [
    'Opportunity cost is the value of the next best alternative forgone when a decision is made.',
    'Elasticity of demand measures the responsiveness of quantity demanded to a change in price. It is calculated as the percentage change in quantity demanded divided by the percentage change in price.',
    'Factors that can shift the demand curve include changes in income, prices of related goods, tastes and preferences, expectations, and the number of buyers.',
    'A perfectly competitive market is characterized by many buyers and sellers, identical products, perfect information, and ease of entry and exit.',
    'Explicit costs are tangible, monetary costs incurred by a firm, while implicit costs are the opportunity costs associated with using resources owned by the firm.',
    'The production possibilities frontier illustrates the trade-offs a society faces due to scarcity. Points on the curve represent efficient resource allocation.',
    'The law of diminishing marginal returns states that as additional units of a variable input are added to fixed inputs, the marginal product of the variable input will eventually decrease.',
    'A monopoly is a market structure in which a single seller or producer controls the entire supply of a good or service, giving them significant pricing power.',
    'Factors that can shift the supply curve include changes in production costs, technology, expectations, taxes, and subsidies.',
    'Utility refers to the satisfaction or pleasure a consumer derives from consuming a good or service.',
    // Add more answers as needed
  ];

  useEffect(() => {
    console.log('MicroeconomicsShortQuestionsPage rendered');
  }, []);

  return (
    <div>
      <Header/>
      <div className="short-questions-container">
        <h1 className="subject-title"><b>Short Questions For Principles of Microeconomics {code}</b></h1>
        <ul>
          {microeconomicsShortQuestions.map((question, index) => (
            <li key={index} className="question-item">
              <strong>{question}</strong>
              <p className="answer">{answers[index]}</p>
            </li>
          ))}
        </ul>
      </div>
      <Footer/>
    </div>
  );
};

export default MicroeconomicsShortQuestionsPage;
