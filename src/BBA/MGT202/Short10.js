import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "../ACT201/Short.css"; 
import Header from "../../Header";
import Footer from '../../Footer';

const PrinciplesManagementShortQuestionsPage = () => {
  const { code } = useParams();

  // Example array of short questions related to principles of management
  const principlesManagementShortQuestions = [
    'Question 1: What are the five functions of management?',
    'Question 2: Define planning and its importance in management.',
    'Question 3: Explain the concept of span of control.',
    'Question 4: What is the difference between leadership and management?',
    'Question 5: Describe the principles of delegation.',
    'Question 6: What is organizational culture?',
    'Question 7: Discuss the importance of motivation in management.',
    'Question 8: Define organizational structure.',
    'Question 9: Explain the role of communication in management.',
    'Question 10: What are the key elements of controlling?',
    // Add more questions as needed
  ];

  // Example array of placeholder answers
  const answers = [
    'The five functions of management are planning, organizing, leading, controlling, and coordinating.',
    'Planning is the process of setting goals, defining strategies, and outlining tasks to achieve objectives. It is crucial for providing direction and purpose in management.',
    'Span of control refers to the number of subordinates a manager can effectively supervise. It impacts the level of hierarchy and communication in an organization.',
    'Leadership involves inspiring and guiding a team towards a common goal, while management focuses on coordinating and overseeing tasks and resources.',
    'Principles of delegation include clarity of responsibility, authority, accountability, and matching tasks with skills.',
    'Organizational culture is the shared values, beliefs, and practices that shape behavior within an organization.',
    'Motivation is essential for boosting employee performance and achieving organizational goals.',
    'Organizational structure defines the hierarchy, roles, and relationships within an organization.',
    'Communication is the process of exchanging information and ideas. Effective communication is vital for successful management.',
    'Key elements of controlling include setting standards, measuring performance, comparing results, and taking corrective actions.',
    // Add more answers as needed
  ];

  useEffect(() => {
    console.log('PrinciplesManagementShortQuestionsPage rendered');
  }, []);

  return (
    <div>
      <Header/>
      <div className="short-questions-container">
        <h1 className="subject-title"> <b>Short Questions For Principles of Management {code}</b></h1>
        <ul>
          {principlesManagementShortQuestions.map((question, index) => (
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

export default PrinciplesManagementShortQuestionsPage;
