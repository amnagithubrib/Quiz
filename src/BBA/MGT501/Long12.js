import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../ACT201/Short.css';
import Header from "../../Header";
import Footer from "../../Footer";

const OBLongQuestionsPage = () => {
  const { code } = useParams();

  // Example array of long questions related to organizational behaviour
  const obLongQuestions = [
    {
      question: 'Question 1: Explain the major theories of motivation in organizational behavior.',
      answer: 'Motivation theories in organizational behavior include Maslow\'s Hierarchy of Needs, Herzberg\'s Two-Factor Theory, and Expectancy Theory. Each theory provides insights into what drives individuals in the workplace.',
    },
    {
      question: 'Question 2: Discuss the impact of leadership styles on organizational culture.',
      answer: 'Leadership styles, such as transformational, transactional, and laissez-faire, influence the organizational culture. Transformational leaders inspire positive change, while transactional leaders focus on tasks. Laissez-faire leaders adopt a hands-off approach.',
    },
    {
      question: 'Question 3: Analyze the role of power and politics in organizational behavior.',
      answer: 'Power and politics play a significant role in organizational behavior. Power is the ability to influence others, and organizational politics involves the use of power to achieve personal or organizational goals. Understanding these dynamics is crucial for effective management.',
    },
    {
      question: 'Question 4: Explain the challenges of managing diversity in the workplace.',
      answer: 'Managing diversity involves addressing challenges related to differences in race, gender, age, and other factors. Challenges include communication barriers, resistance to change, and the need for inclusive policies and practices.',
    },
    {
      question: 'Question 5: Describe the components of effective team communication.',
      answer: 'Effective team communication involves clear objectives, active listening, open feedback, and a positive communication climate. Teams that communicate well can overcome challenges and achieve their goals.',
    },
    // Add more long questions and detailed answers as needed
  ];

  useEffect(() => {
    console.log('OBLongQuestionsPage rendered');
  }, []);

  return (
    <div>
      <Header />
      <div className="short-questions-container">
        <h1 className="subject-title"><b>Long Questions For Organizational Behaviour {code}</b></h1>
        {obLongQuestions.map((qna, index) => (
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

export default OBLongQuestionsPage;
