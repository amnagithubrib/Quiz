import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../ACT201/Short.css';
import Header from "../../Header";
import Footer from "../../Footer";

const HRMLongQuestionsPage = () => {
  const { code } = useParams();

  // Example array of long questions related to human resource management
  const hrmLongQuestions = [
    {
      question: 'Question 1: Discuss the importance of strategic human resource management in organizations.',
      answer: 'Strategic human resource management aligns HR practices with organizational goals. It involves workforce planning, talent acquisition, performance management, and employee development to gain a competitive advantage.',
    },
    {
      question: 'Question 2: Explain the concept of employee retention strategies and their impact on organizational success.',
      answer: 'Employee retention strategies focus on keeping valuable employees within the organization. They include career development, work-life balance, competitive compensation, and a positive workplace culture. High retention contributes to organizational stability and success.',
    },
    {
      question: 'Question 3: Analyze the challenges and benefits of managing a diverse workforce.',
      answer: 'Managing a diverse workforce brings challenges such as communication barriers and differing perspectives. However, the benefits include increased creativity, innovation, and better representation of diverse customer needs.',
    },
    {
      question: 'Question 4: Discuss the role of HR in organizational change management.',
      answer: 'HR plays a vital role in managing organizational change by facilitating communication, addressing employee concerns, and ensuring a smooth transition. This involves strategic planning, training, and fostering a change-friendly culture.',
    },
    {
      question: 'Question 5: Describe the steps involved in the recruitment and selection process.',
      answer: 'The recruitment process includes identifying staffing needs, sourcing candidates, and initial screening. The selection process involves interviews, assessments, and final candidate selection. Effective recruitment and selection contribute to building a talented workforce.',
    },
    // Add more long questions and detailed answers as needed
  ];

  useEffect(() => {
    console.log('HRMLongQuestionsPage rendered');
  }, []);

  return (
    <div>
      <Header />
      <div className="short-questions-container">
        <h1>Long Questions For Human Resource Management {code}</h1>
        {hrmLongQuestions.map((qna, index) => (
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

export default HRMLongQuestionsPage;
