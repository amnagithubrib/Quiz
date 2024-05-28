// CostLongQuestionsPage.js

import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../ACT201/Short.css'; // Import the same or a different CSS file for styling
import Header from '../../Header';
import Footer from '../../Footer';

const CostLongQuestionsPage = () => {
  const { code } = useParams();

  // Example array of long questions related to cost accounting
  const costLongQuestions = [
    {
      question: 'Question 1: What is the role of cost accounting in a business?',
      answer: 'Cost accounting plays a crucial role in business by tracking, analyzing, and managing costs. It provides valuable information for decision-making, cost control, and setting prices.',
    },
    {
      question: 'Question 2: Explain the difference between direct costs and indirect costs.',
      answer: 'Direct costs are directly attributable to a specific product or service, while indirect costs are not easily traceable and need allocation. Understanding this difference is essential for accurate cost analysis.',
    },
    {
      question: 'Question 3: What is the purpose of a cost allocation?',
      answer: 'Cost allocation involves assigning indirect costs to specific cost objects, such as products or departments. It helps determine the true cost of production and supports decision-making processes.',
    },
    {
      question: 'Question 4: How does standard costing contribute to cost management?',
      answer: 'Standard costing involves setting predetermined cost standards for various elements of production. It provides a benchmark for evaluating actual costs, identifying variances, and improving cost efficiency.',
    },
    {
      question: 'Question 5: Define activity-based costing (ABC) and its advantages.',
      answer: 'Activity-based costing allocates indirect costs based on the activities that drive those costs. Its advantages include more accurate cost assignment, better decision support, and improved understanding of cost drivers.',
    },
    // Add more long questions and detailed answers as needed
  ];

  useEffect(() => {
    console.log('CostLongQuestionsPage rendered');
  }, []);

  return (
    <div>
      <Header />
      <div className="short-questions-container">
        <h1>Long Questions For Cost Accounting {code}</h1>
        {costLongQuestions.map((qna, index) => (
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

export default CostLongQuestionsPage;
