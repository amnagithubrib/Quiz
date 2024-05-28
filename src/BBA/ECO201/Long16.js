import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../ACT201/Short.css'; 
import Header from "../../Header";
import Footer from "../../Footer";

const MicroeconomicsLongQuestionsPage = () => {
  const { code } = useParams();

  // Example array of long questions related to Principles of Microeconomics
  const microeconomicsLongQuestions = [
    {
      question: 'Question 1: Discuss the concept of supply and demand. How do they interact in a market?',
      answer: 'Supply and demand are fundamental economic concepts. Demand refers to the quantity of a good or service consumers are willing to buy at various prices, while supply is the quantity producers are willing to sell. The market equilibrium is reached where supply equals demand, determining the price and quantity traded.',
    },
    {
      question: 'Question 2: Explain the concept of elasticity of demand. Why is it important for businesses?',
      answer: 'Elasticity of demand measures how sensitive the quantity demanded is to changes in price. Businesses use elasticity to understand how consumers respond to price changes. If demand is elastic, a price increase may lead to a significant decrease in quantity demanded, and vice versa. Understanding elasticity helps businesses set optimal prices and forecast revenue changes.',
    },
    {
      question: 'Question 3: Define and discuss the different forms of market structures.',
      answer: 'Market structures refer to the organizational and competitive characteristics of a market. The main types are perfect competition, monopolistic competition, oligopoly, and monopoly. Perfect competition features many small firms selling identical products, while a monopoly has a single seller. Oligopoly and monopolistic competition fall between these extremes, each with unique characteristics and implications for pricing and competition.',
    },
    {
      question: 'Question 4: Explore the concept of externalities in economic decision-making.',
      answer: 'Externalities are unintended side effects of economic activities on third parties who are not involved in the transaction. They can be positive (benefits) or negative (costs). Externalities pose challenges for market efficiency as they lead to divergence between private and social costs or benefits. Government intervention or market-based solutions may be employed to address externalities.',
    },
    {
      question: 'Question 5: Discuss the role of government in a market economy.',
      answer: 'The role of government in a market economy is multifaceted. It includes enforcing property rights, ensuring competition, regulating markets to prevent abuse, addressing externalities, providing public goods and services, and managing economic stability. The extent of government intervention varies across different economic systems and is subject to ongoing debate.',
    },
    // Add more long questions and detailed answers as needed
  ];

  useEffect(() => {
    console.log('MicroeconomicsLongQuestionsPage rendered');
  }, []);

  return (
    <div>
      <Header/>
      <div className="short-questions-container">
        <h1 className="subject-title"><b>Long Questions For Principles of Microeconomics {code}</b></h1>
        {microeconomicsLongQuestions.map((qna, index) => (
          <div key={index} className="question-item">
            <strong>{qna.question}</strong>
            <p className="answer">{qna.answer}</p>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default MicroeconomicsLongQuestionsPage;
