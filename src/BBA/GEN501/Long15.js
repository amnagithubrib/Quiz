import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../ACT201/Short.css';
import Header from "../../Header";
import Footer from "../../Footer";

const BCRWLongQuestionsPage = () => {
  const { code } = useParams();

  // Example array of long questions related to business communication & report writing
  const bcrwLongQuestions = [
    {
      question: 'Question 1: Discuss the role of effective communication in enhancing workplace productivity.',
      answer: 'Effective communication in the workplace improves understanding, reduces errors, and fosters collaboration, leading to increased productivity and employee satisfaction.',
    },
    {
      question: 'Question 2: Explain the process of developing an effective business report, from planning to presentation.',
      answer: 'The process includes defining the purpose, conducting research, organizing information, drafting, revising, and finally presenting the report to the intended audience.',
    },
    {
      question: 'Question 3: How does cross-cultural communication impact international business negotiations?',
      answer: 'Cross-cultural communication influences negotiation styles, expectations, and perceptions. Understanding cultural nuances is crucial for successful international business negotiations.',
    },
    {
      question: 'Question 4: Analyze the ethical considerations in business communication, especially in the era of digital communication.',
      answer: 'Ethical considerations include honesty, transparency, and respect for privacy. In the digital era, issues like data privacy, cybersecurity, and misinformation require careful attention.',
    },
    {
      question: 'Question 5: Explore the challenges of effective virtual communication in a remote work environment.',
      answer: 'Challenges include potential misinterpretation of messages, lack of nonverbal cues, and difficulty in maintaining engagement. Employing appropriate tools and strategies is essential for overcoming these challenges.',
    },
    // Add more long questions and detailed answers as needed
  ];

  useEffect(() => {
    console.log('BCRWLongQuestionsPage rendered');
  }, []);

  return (
    <div>
      <Header/>
      <div className="short-questions-container">
        <h1 className="subject-title"> <b>Long Questions For Business Communication & Report Writing {code}</b></h1>
        {bcrwLongQuestions.map((qna, index) => (
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

export default BCRWLongQuestionsPage;
