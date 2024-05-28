import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "../ACT201/Short.css"; 
import Header from "../../Header";
import Footer from '../../Footer';

const HRMShortQuestionsPage = () => {
  const { code } = useParams();

  // Example array of short questions related to human resource management
  const hrmShortQuestions = [
    'Question 1: Explain the concept of employee onboarding.',
    'Question 2: What is the purpose of performance appraisals?',
    'Question 3: Describe the importance of diversity and inclusion in the workplace.',
    'Question 4: Define human resource planning.',
    'Question 5: How does training and development contribute to employee growth?',
    'Question 6: Discuss the role of HR in conflict resolution.',
    'Question 7: Explain the term "talent acquisition."',
    'Question 8: Describe the components of a compensation package.',
    'Question 9: What is the significance of employee engagement?',
    'Question 10: Define HRM and its primary functions.',
    // Add more questions as needed
  ];

  // Example array of placeholder answers
  const answers = [
    'Employee onboarding is the process of integrating new hires into the organization, providing them with the necessary information, tools, and support.',
    'Performance appraisals assess an employee\'s job performance and provide feedback. They are crucial for identifying strengths, areas for improvement, and career development.',
    'Diversity and inclusion promote a workplace where individuals from different backgrounds feel valued, contributing to creativity, innovation, and a positive work culture.',
    'Human resource planning involves forecasting future staffing needs, ensuring the right people are in the right positions at the right time.',
    'Training and development programs enhance employees\' skills and knowledge, fostering personal and professional growth.',
    'HR plays a key role in resolving workplace conflicts by mediating disputes, implementing fair policies, and promoting effective communication.',
    'Talent acquisition is the process of identifying, attracting, and hiring skilled individuals to meet organizational needs.',
    'A compensation package includes salary, bonuses, benefits, and other perks offered to employees as part of their overall remuneration.',
    'Employee engagement refers to the emotional commitment and dedication employees have toward their work and the organization.',
    'Human Resource Management (HRM) is the strategic approach to managing an organization\'s employees, encompassing recruitment, training, performance management, and other HR functions.',
    // Add more answers as needed
  ];

  useEffect(() => {
    console.log('HRMShortQuestionsPage rendered');
  }, []);

  return (
    <div>
      <Header/>
      <div className="short-questions-container">
        <h1 className="subject-title"> <b>Short Questions For Human Resource Management {code}</b></h1>
        <ul>
          {hrmShortQuestions.map((question, index) => (
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

export default HRMShortQuestionsPage;
