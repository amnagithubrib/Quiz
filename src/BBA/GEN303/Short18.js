import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "../ACT201/Short.css"; 
import Header from "../../Header";
import Footer from '../../Footer';

const CreativeThinkingShortQuestionsPage = () => {
  const { code } = useParams();

  // Example array of short questions related to Creative Thinking and Reasoning
  const creativeThinkingShortQuestions = [
    'Question 1: Define critical thinking and explain its importance.',
    'Question 2: What is the difference between convergent and divergent thinking?',
    'Question 3: Discuss the role of creativity in problem-solving.',
    'Question 4: Explain the concept of metacognition in the context of thinking skills.',
    'Question 5: How can brainstorming be used to enhance creative thinking?',
    'Question 6: Define lateral thinking and provide an example of its application.',
    'Question 7: Discuss the relationship between creativity and innovation.',
    'Question 8: How does emotional intelligence contribute to effective thinking?',
    'Question 9: Explore the characteristics of a critical thinker.',
    'Question 10: Explain the importance of questioning in the thinking process.',
    // Add more questions as needed
  ];

  // Example array of placeholder answers
  const answers = [
    'Critical thinking is the ability to analyze, evaluate, and make reasoned judgments. It is essential for effective problem-solving, decision-making, and understanding complex issues.',
    'Convergent thinking focuses on finding a single, correct solution to a problem, while divergent thinking involves generating multiple possible solutions and exploring various perspectives.',
    'Creativity plays a crucial role in problem-solving by encouraging individuals to think outside the box, consider unconventional solutions, and approach challenges with innovation.',
    'Metacognition refers to thinking about one\'s own thinking processes. It involves self-awareness, self-reflection, and the ability to monitor and control cognitive processes.',
    'Brainstorming is a group technique that encourages the generation of creative ideas by promoting open and spontaneous discussion. It enhances creative thinking by fostering collaboration and idea generation.',
    'Lateral thinking is a thinking strategy that involves approaching problems from unique angles and employing unconventional methods. An example could be using unrelated concepts to find a solution.',
    'Creativity and innovation are closely linked. Creativity involves generating novel ideas, while innovation is the implementation of those ideas to create value or solve problems.',
    'Emotional intelligence, the ability to understand and manage one\'s own emotions and those of others, contributes to effective thinking by promoting empathy, self-regulation, and interpersonal skills.',
    'Critical thinkers possess traits such as curiosity, skepticism, open-mindedness, and the ability to analyze information objectively. These characteristics contribute to informed decision-making.',
    'Questioning is a fundamental part of the thinking process, encouraging individuals to explore ideas, challenge assumptions, and seek deeper understanding.',
    // Add more answers as needed
  ];

  useEffect(() => {
    console.log('CreativeThinkingShortQuestionsPage rendered');
  }, []);

  return (
    <div>
      <Header />
      <div className="short-questions-container">
        <h1>Short Questions For Creative Thinking and Reasoning {code}</h1>
        {creativeThinkingShortQuestions.map((question, index) => (
          <div key={index} className="question-item">
            <strong>{question}</strong>
            <p className="answer">{answers[index]}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default CreativeThinkingShortQuestionsPage;
