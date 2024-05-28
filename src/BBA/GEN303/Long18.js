import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "../ACT201/Short.css"; 
import Header from "../../Header";
import Footer from '../../Footer';

const CreativeThinkingLongQuestionsPage = () => {
  const { code } = useParams();

  // Example array of long questions related to Creative Thinking and Reasoning
  const creativeThinkingLongQuestions = [
    {
      question: 'Question 1: Explore the importance of creative thinking in the business world. How can businesses foster a culture of creativity?',
      answer: 'Creative thinking is crucial in the business world as it drives innovation, problem-solving, and adaptability. Businesses can foster a culture of creativity by encouraging diverse perspectives, providing opportunities for experimentation, and recognizing and rewarding creative contributions. Creating an environment that values creativity enhances competitiveness and stimulates continuous improvement.',
    },
    {
      question: 'Question 2: Discuss the role of critical thinking in effective decision-making. Provide examples of how critical thinking can be applied in real-life situations.',
      answer: 'Critical thinking plays a key role in effective decision-making by enabling individuals to analyze information, evaluate options, and make informed choices. Examples of critical thinking in real-life situations include evaluating the credibility of sources, assessing the implications of decisions, and identifying underlying assumptions. Critical thinkers approach problems systematically and consider multiple perspectives before making decisions.',
    },
    {
      question: 'Question 3: Explain the concept of lateral thinking and its application in problem-solving. Provide examples of lateral thinking techniques.',
      answer: 'Lateral thinking involves approaching problems from unconventional angles and using creative methods to find solutions. It encourages thinking "outside the box." Examples of lateral thinking techniques include random word generation, changing perspectives, and using analogies. By breaking away from traditional thought patterns, individuals can uncover innovative solutions and explore new possibilities in problem-solving.',
    },
    {
      question: 'Question 4: Explore the relationship between emotional intelligence and effective communication. How can individuals with high emotional intelligence contribute to positive team dynamics?',
      answer: 'Emotional intelligence contributes to effective communication by enhancing self-awareness, empathy, and interpersonal skills. Individuals with high emotional intelligence can navigate and manage emotions, leading to clearer communication and stronger relationships. In team dynamics, emotionally intelligent individuals contribute to positive collaboration, conflict resolution, and a supportive team culture.',
    },
    {
      question: 'Question 5: Discuss the challenges and benefits of incorporating creativity and critical thinking into educational curricula. How can educators overcome challenges to promote these skills?',
      answer: 'Incorporating creativity and critical thinking into educational curricula offers numerous benefits, such as preparing students for future challenges and fostering a love of learning. However, challenges may include resistance to change and standardized testing pressures. Educators can overcome these challenges by integrating interactive activities, real-world problem-solving, and collaborative projects into their teaching methods. Creating an engaging and dynamic learning environment encourages the development of creative and critical thinking skills.',
    },
    // Add more long questions and detailed answers as needed
  ];

  useEffect(() => {
    console.log('CreativeThinkingLongQuestionsPage rendered');
  }, []);

  return (
    <div>
      <Header />
      <div className="short-questions-container">
        <h1>Long Questions For Creative Thinking and Reasoning {code}</h1>
        {creativeThinkingLongQuestions.map((qna, index) => (
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

export default CreativeThinkingLongQuestionsPage;
