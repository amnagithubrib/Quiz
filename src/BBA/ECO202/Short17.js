import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "../ACT201/Short.css"; 
import Header from "../../Header";
import Footer from '../../Footer';

const MacroeconomicsShortQuestionsPage = () => {
  const { code } = useParams();

  // Example array of short questions related to Principles of Macroeconomics
  const macroeconomicsShortQuestions = [
    'Question 1: What are the main components of Gross Domestic Product (GDP)?',
    'Question 2: Explain the difference between nominal GDP and real GDP.',
    'Question 3: Define inflation and discuss its causes.',
    'Question 4: What is the unemployment rate? How is it calculated?',
    'Question 5: Discuss the concept of fiscal policy and its tools.',
    'Question 6: Explain the multiplier effect in macroeconomics.',
    'Question 7: Define monetary policy and discuss its objectives.',
    'Question 8: What is the Phillips curve?',
    'Question 9: Discuss the differences between classical and Keynesian economics.',
    'Question 10: Explain the concept of aggregate demand and aggregate supply.',
    // Add more questions as needed
  ];

  // Example array of placeholder answers
  const answers = [
    'The main components of GDP are consumption, investment, government spending, and net exports (exports minus imports).',
    'Nominal GDP is the total value of goods and services produced, measured in current prices, while real GDP adjusts for inflation or deflation, providing a more accurate measure of economic output.',
    'Inflation is the increase in the general price level of goods and services over time. Causes include demand-pull inflation, cost-push inflation, built-in inflation, and hyperinflation.',
    'The unemployment rate is the percentage of the labor force that is unemployed and actively seeking employment. It is calculated as the number of unemployed individuals divided by the labor force.',
    'Fiscal policy involves government actions to influence the economy through taxation and spending. Tools include expansionary (stimulative) and contractionary (restraining) fiscal policies.',
    'The multiplier effect explains how an initial change in spending leads to a larger final change in GDP. It occurs when individuals and businesses in the economy spend the additional income they receive.',
    'Monetary policy is the management of the money supply and interest rates by a central bank. Objectives include price stability, full employment, and economic growth. Tools include open market operations and changes in interest rates.',
    'The Phillips curve depicts the inverse relationship between inflation and unemployment. It suggests that policymakers face a trade-off between inflation and unemployment.',
    'Classical economics emphasizes the self-regulating nature of markets and the importance of limited government intervention. Keynesian economics, developed by John Maynard Keynes, advocates for government intervention to manage economic fluctuations.',
    'Aggregate demand is the total quantity of goods and services demanded in an economy at a given overall price level. Aggregate supply is the total quantity of goods and services produced in an economy at a given overall price level.',
    // Add more answers as needed
  ];

  useEffect(() => {
    console.log('MacroeconomicsShortQuestionsPage rendered');
  }, []);

  return (
    <div>
      <Header />
      <div className="short-questions-container">
        <h1>Short Questions For Principles of Macroeconomics {code}</h1>
        {macroeconomicsShortQuestions.map((question, index) => (
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

export default MacroeconomicsShortQuestionsPage;
