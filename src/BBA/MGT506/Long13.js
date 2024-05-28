import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../ACT201/Short.css';
import Header from "../../Header";
import Footer from "../../Footer";

const BRMLongQuestionsPage = () => {
  const { code } = useParams();

  // Example array of long questions related to business research methods
  const brmLongQuestions = [
    {
      question: 'Question 1: Explain the steps involved in the research process.',
      answer: 'The research process typically involves identifying the research problem, conducting a literature review, defining the research objectives, choosing a research design, collecting data, analyzing data, drawing conclusions, and communicating the results.',
    },
    {
      question: 'Question 2: Discuss the advantages and disadvantages of qualitative research methods.',
      answer: 'Qualitative research methods, such as interviews and focus groups, provide in-depth insights into human behavior. Advantages include rich data, flexibility, and contextual understanding. However, disadvantages may include subjectivity, limited generalizability, and potential researcher bias.',
    },
    {
      question: 'Question 3: What is the role of a research hypothesis in the scientific research process?',
      answer: 'A research hypothesis guides the research process by providing a clear and testable statement about the expected relationship between variables. It helps in formulating research questions, designing the study, and analyzing data.',
    },
    {
      question: 'Question 4: Explain the concept of sampling and its importance in research.',
      answer: 'Sampling involves selecting a subset of the population for study. It is crucial for making generalizations about the entire population. Different sampling methods, such as random sampling and stratified sampling, can be used based on the research objectives.',
    },
    {
      question: 'Question 5: How does data analysis contribute to drawing valid conclusions in business research?',
      answer: 'Data analysis involves organizing, interpreting, and presenting data to draw meaningful conclusions. Statistical analysis helps researchers identify patterns, relationships, and trends in the data, contributing to the validity and reliability of research findings.',
    },
    // Add more long questions and detailed answers as needed
  ];

  useEffect(() => {
    console.log('BRMLongQuestionsPage rendered');
  }, []);

  return (
    <div>
      <Header />
      <div className="short-questions-container">
        <h1 className="subject-title"> <b>Long Questions For Business Research Methods {code}</b></h1>
        {brmLongQuestions.map((qna, index) => (
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

export default BRMLongQuestionsPage;
