import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "../ACT201/Short.css"; 
import Header from "../../Header";
import Footer from '../../Footer';

const MacroeconomicsLongQuestionsPage = () => {
  const { code } = useParams();

  // Example array of long questions related to Principles of Macroeconomics
  const macroeconomicsLongQuestions = [
    {
      question: 'Question 1: Explain the concept of Gross Domestic Product (GDP) and its significance in measuring economic performance.',
      answer: 'GDP is the total value of all goods and services produced within a country in a specific time period. It serves as a key indicator of a nation\'s economic health and performance. GDP includes consumption, investment, government spending, and net exports. Measuring GDP helps assess the standard of living, economic growth, and overall economic well-being.',
    },
    {
      question: 'Question 2: Discuss the causes and consequences of inflation in an economy.',
      answer: 'Inflation is the increase in the general price level of goods and services over time. Demand-pull inflation occurs when demand for goods and services exceeds their supply. Cost-push inflation results from increased production costs. Consequences of inflation include reduced purchasing power, uncertainty, and redistributive effects. Central banks use monetary policy to control inflation.',
    },
    {
      question: 'Question 3: Define and explain the various types of unemployment. How does unemployment impact an economy?',
      answer: 'Unemployment refers to the condition of being without a job despite actively seeking employment. Types of unemployment include frictional, structural, and cyclical unemployment. Frictional unemployment is temporary and occurs during job transitions. Structural unemployment results from shifts in the economy, and cyclical unemployment is related to economic downturns. Unemployment leads to lost output, income, and human capital.',
    },
    {
      question: 'Question 4: Explore the role of fiscal policy in economic management. Provide examples of expansionary and contractionary fiscal policies.',
      answer: 'Fiscal policy involves government actions to influence the economy through taxation and spending. Expansionary fiscal policy involves increasing government spending or reducing taxes to stimulate economic activity. Contractionary fiscal policy aims to cool down an overheated economy by reducing government spending or increasing taxes. Examples include infrastructure projects, tax cuts, and austerity measures.',
    },
    {
      question: 'Question 5: Analyze the tools and objectives of monetary policy. How does monetary policy impact interest rates and inflation?',
      answer: 'Monetary policy, managed by a central bank, involves controlling the money supply and interest rates to achieve economic goals. Tools include open market operations, reserve requirements, and discount rates. Objectives include price stability, full employment, and economic growth. Changes in interest rates influence borrowing, spending, and inflation. Tightening monetary policy raises interest rates to curb inflation, while easing lowers rates to spur economic activity.',
    },
    // Add more long questions and detailed answers as needed
  ];

  useEffect(() => {
    console.log('MacroeconomicsLongQuestionsPage rendered');
  }, []);

  return (
    <div>
      <Header />
      <div className="short-questions-container">
        <h1>Long Questions For Principles of Macroeconomics {code}</h1>
        {macroeconomicsLongQuestions.map((qna, index) => (
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

export default MacroeconomicsLongQuestionsPage;
