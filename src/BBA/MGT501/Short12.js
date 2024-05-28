import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "../ACT201/Short.css"; 
import Header from "../../Header";
import Footer from '../../Footer';

const OBShortQuestionsPage = () => {
  const { code } = useParams();

  // Example array of short questions related to organizational behaviour
  const obShortQuestions = [
    'Question 1: Define organizational behavior.',
    'Question 2: Explain the importance of motivation in the workplace.',
    'Question 3: Discuss the concept of organizational culture.',
    'Question 4: What is the significance of communication in organizations?',
    'Question 5: Define the term "leadership" in organizational behavior.',
    'Question 6: How does diversity impact organizational performance?',
    'Question 7: Describe the stages of team development.',
    'Question 8: Explain the difference between formal and informal communication.',
    'Question 9: Discuss the role of emotions in organizational behavior.',
    'Question 10: What is the impact of stress on employee performance?',
    // Add more questions as needed
  ];

  // Example array of placeholder answers
  const answers = [
    'Organizational behavior is the study of individual and group behavior within an organization, and how it influences work performance and overall effectiveness.',
    'Motivation is crucial for enhancing employee performance and productivity. It involves the factors that drive individuals to achieve their goals.',
    'Organizational culture refers to the shared values, beliefs, and practices that shape the behavior of individuals within an organization.',
    'Communication is essential for information flow, coordination, and building a positive work environment in organizations.',
    'Leadership involves influencing and guiding others to achieve organizational goals. Effective leadership is critical for success.',
    'Diversity in the workplace brings different perspectives, skills, and ideas, contributing to innovation and better decision-making.',
    'The stages of team development include forming, storming, norming, performing, and adjourning. Teams go through these stages as they work together.',
    'Formal communication follows official channels and is documented, while informal communication occurs spontaneously without a predetermined structure.',
    'Emotions can influence workplace behavior, job satisfaction, and team dynamics. Emotional intelligence is important in organizational behavior.',
    'Stress can negatively impact employee well-being and performance. Organizations need strategies to manage and reduce stress.',
    // Add more answers as needed
  ];

  useEffect(() => {
    console.log('OBShortQuestionsPage rendered');
  }, []);

  return (
    <div>
      <Header/>
      <div className="short-questions-container">
        <h1 className="subject-title"> <b>Short Questions For Organizational Behaviour {code}</b></h1>
        <ul>
          {obShortQuestions.map((question, index) => (
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

export default OBShortQuestionsPage;
