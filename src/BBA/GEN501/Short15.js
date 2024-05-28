import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "../ACT201/Short.css"; 
import Header from "../../Header";
import Footer from '../../Footer';

const BCRWShortQuestionsPage = () => {
  const { code } = useParams();

  // Example array of short questions related to business communication & report writing
  const bcrwShortQuestions = [
    'Question 1: What are the key components of effective business communication?',
    'Question 2: Explain the importance of audience analysis in communication.',
    'Question 3: Discuss the structure of a formal business report.',
    'Question 4: How does cultural diversity impact workplace communication?',
    'Question 5: Describe the purpose of a memo in business communication.',
    'Question 6: What is the difference between formal and informal communication channels?',
    'Question 7: How can nonverbal cues influence communication in a business setting?',
    'Question 8: Discuss the role of feedback in the communication process.',
    'Question 9: Explain the concept of business ethics in communication.',
    'Question 10: How does technology affect modern business communication?',
    // Add more questions as needed
  ];

  // Example array of placeholder answers
  const answers = [
    'Effective business communication includes clear messaging, proper tone, active listening, and appropriate channels.',
    'Audience analysis involves understanding the characteristics, needs, and expectations of the audience to tailor communication accordingly.',
    'A formal business report typically includes an introduction, methodology, findings, conclusions, and recommendations.',
    'Cultural diversity can impact communication by influencing language, communication styles, and perceptions of hierarchy.',
    'A memo is a written document used for internal communication, conveying information, updates, or directives within an organization.',
    'Formal communication follows established channels and protocols, while informal communication is more spontaneous and casual.',
    'Nonverbal cues, such as body language and gestures, play a significant role in conveying messages and building rapport.',
    'Feedback is essential for effective communication, allowing for clarification, improvement, and mutual understanding.',
    'Business ethics in communication involves honesty, integrity, and respecting the rights and dignity of others.',
    'Technology affects communication by providing various tools like email, video conferencing, and social media, influencing speed and accessibility.',
    // Add more answers as needed
  ];

  useEffect(() => {
    console.log('BCRWShortQuestionsPage rendered');
  }, []);

  return (
    <div>
      <Header/>
      <div className="short-questions-container">
        <h1 className="subject-title"> <b>Short Questions For Business Communication & Report Writing {code}</b></h1>
        <ul>
          {bcrwShortQuestions.map((question, index) => (
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

export default BCRWShortQuestionsPage;
