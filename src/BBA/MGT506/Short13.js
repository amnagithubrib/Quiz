import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../ACT201/Short.css'; 
import Header from "../../Header";
import Footer from '../../Footer';

const BRMShortQuestionsPage = () => {
  const { code } = useParams();

  // Example array of short questions related to business research methods
  const brmShortQuestions = [
    'Question 1: Explain the importance of research in business.',
    'Question 2: What is a research hypothesis, and why is it important?',
    'Question 3: Discuss the difference between qualitative and quantitative research methods.',
    'Question 4: Define the term "sampling" in research.',
    'Question 5: What is the significance of data analysis in business research?',
    'Question 6: Explain the concept of reliability and validity in research.',
    'Question 7: Discuss the ethical considerations in business research.',
    'Question 8: What are the key components of a research proposal?',
    'Question 9: Describe the process of data collection in business research.',
    'Question 10: Why is it essential to critically evaluate research sources?',
    // Add more questions as needed
  ];

  // Example array of placeholder answers
  const answers = [
    'Research in business helps in decision-making, problem-solving, and understanding market trends. It provides a basis for making informed business strategies.',
    'A research hypothesis is a statement predicting the relationship between variables. It guides the research process and helps in testing the research question.',
    'Qualitative research focuses on understanding the underlying motivations, attitudes, and behaviors, while quantitative research involves numerical data and statistical analysis.',
    'Sampling is the process of selecting a subset of the population for study. It helps in making inferences about the entire population.',
    'Data analysis is crucial for interpreting research findings and drawing meaningful conclusions. It involves organizing, interpreting, and presenting data.',
    'Reliability refers to the consistency and accuracy of research results, while validity ensures that the research measures what it intends to measure.',
    'Ethical considerations in business research include ensuring participant confidentiality, obtaining informed consent, and conducting research with integrity.',
    'A research proposal typically includes an introduction, literature review, research objectives, methodology, timeline, and budget.',
    'Data collection involves gathering information through surveys, interviews, observations, or experiments. It is a crucial step in the research process.',
    'Critical evaluation of research sources ensures that the information used is credible, relevant, and unbiased.',
    // Add more answers as needed
  ];

  useEffect(() => {
    console.log('BRMShortQuestionsPage rendered');
  }, []);

  return (
    <div>
      <Header/>
      <div className="short-questions-container">
        <h1 className="subject-title"> <b>Short Questions For Business Research Methods {code}</b></h1>
        <ul>
          {brmShortQuestions.map((question, index) => (
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

export default BRMShortQuestionsPage;
