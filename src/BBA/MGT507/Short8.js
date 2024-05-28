import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../ACT201/Short.css'; // Import your CSS file for styling
import Header from '../../Header';
import Footer from '../../Footer';

const OperationsManagementShortQuestionsPage = () => {
  const { code } = useParams();

  // Example array of short questions related to operations management
  const operationsManagementShortQuestions = [
    'Question 1: Define Operations Management.',
    'Question 2: What is the purpose of capacity planning?',
    'Question 3: Explain the concept of lead time in operations.',
    'Question 4: How does Total Quality Management (TQM) improve operations?',
    'Question 5: Describe the role of a production manager.',
    'Question 6: What is the difference between efficiency and effectiveness in operations?',
    'Question 7: Discuss the importance of supply chain management.',
    'Question 8: What is lean manufacturing, and how does it reduce waste?',
    'Question 9: Define Six Sigma and its role in operations improvement.',
    'Question 10: How does technology impact operations management processes?',
    // Add more questions as needed
  ];

  // Example array of placeholder answers for operations management
  const operationsManagementAnswers = [
    'Operations Management involves designing, managing, and improving the processes used to create and deliver goods and services.',
    'Capacity planning aims to ensure that an organization has the right amount of resources (e.g., labor, equipment) to meet demand.',
    'Lead time is the total time it takes for a product to move through the production process, from the initiation of the process to delivery.',
    'Total Quality Management (TQM) is a management approach that focuses on continuous improvement to enhance product and process quality.',
    'A production manager oversees the manufacturing process, ensuring efficiency, quality, and timely delivery of products.',
    'Efficiency is about doing things right, while effectiveness is about doing the right things in operations management.',
    'Supply chain management involves the coordination of activities to ensure the smooth flow of goods and services from suppliers to customers.',
    'Lean manufacturing is an approach that aims to minimize waste in production processes, such as excess inventory and unnecessary steps.',
    'Six Sigma is a set of techniques and tools for process improvement, aiming to reduce defects and variations in operations.',
    'Technology, such as automation and data analytics, can streamline operations, improve accuracy, and enhance decision-making.',
    // Add more answers as needed
  ];

  useEffect(() => {
    console.log('OperationsManagementShortQuestionsPage rendered');
  }, []);

  return (
    <div>
      <Header />
      <div className="short-questions-container">
        <h1>Short Questions For Operations Management ({code})</h1>
        {operationsManagementShortQuestions.map((question, index) => (
          <div key={index} className="question-item">
            <strong>{question}</strong>
            <p className="answer">{operationsManagementAnswers[index]}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default OperationsManagementShortQuestionsPage;
