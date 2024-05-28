import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../ACT201/Short.css'; // Import your CSS file for styling
import Header from '../../Header';
import Footer from '../../Footer';

const OperationsManagementLongQuestionsPage = () => {
  const { code } = useParams();

  // Example array of long questions related to operations management
  const operationsManagementLongQuestions = [
    {
      question: 'Question 1: Discuss the key objectives of Operations Management in a manufacturing setting.',
      answer: 'The key objectives of Operations Management in manufacturing include improving efficiency, optimizing production processes, ensuring quality control, managing inventory, and meeting customer demand.',
    },
    {
      question: 'Question 2: Explain the role of forecasting in Operations Management and its impact on decision-making.',
      answer: 'Forecasting in Operations Management involves predicting future demand for products or services. It aids decision-making by helping organizations plan production, allocate resources, and manage inventory based on anticipated demand.',
    },
    {
      question: 'Question 3: What are the main principles of Total Quality Management (TQM) and how do they contribute to operational excellence?',
      answer: 'Total Quality Management (TQM) principles include customer focus, continuous improvement, employee involvement, and process optimization. These principles contribute to operational excellence by fostering a culture of quality, minimizing defects, and enhancing customer satisfaction.',
    },
    {
      question: 'Question 4: Discuss the concept of supply chain integration and its importance in modern Operations Management.',
      answer: 'Supply chain integration involves coordinating and aligning activities across the entire supply chain, from suppliers to end customers. It is crucial in Operations Management for improving efficiency, reducing costs, and enhancing overall supply chain performance.',
    },
    {
      question: 'Question 5: How does the implementation of lean manufacturing principles contribute to waste reduction and operational efficiency?',
      answer: 'Lean manufacturing aims to eliminate waste, improve efficiency, and maximize value for customers. It achieves this by identifying and eliminating non-value-added activities, optimizing production flow, and minimizing inventory levels.',
    },
    // Add more long questions and detailed answers as needed
  ];

  useEffect(() => {
    console.log('OperationsManagementLongQuestionsPage rendered');
  }, []);

  return (
    <div>
      <Header />
      <div className="long-questions-container">
        <h1>Long Questions For Operations Management ({code})</h1>
        {operationsManagementLongQuestions.map((qna, index) => (
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

export default OperationsManagementLongQuestionsPage;
