import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "../ACT201/Short.css"; 
import Header from "../../Header";
import Footer from '../../Footer';

const MathStatisticsBusinessShortQuestionsPage = () => {
  const { code } = useParams();

  // Example array of short questions related to Mathematics & Statistics for Business
  const mathStatisticsBusinessShortQuestions = [
    'Question 1: Explain the concept of probability and its relevance in business decision-making.',
    'Question 2: How is correlation different from causation, and why is it important to understand this difference in statistical analysis?',
    'Question 3: Describe the steps involved in hypothesis testing. Provide an example to illustrate the process.',
    'Question 4: What is the significance of regression analysis in business forecasting?',
    'Question 5: Discuss the central limit theorem and its implications for statistical analysis in business.',
    'Question 6: How does the standard deviation measure variability in a dataset? Provide a practical business example.',
    'Question 7: Explain the concept of time value of money and its applications in financial decision-making.',
    'Question 8: Define and differentiate between descriptive and inferential statistics. Provide examples of each.',
    'Question 9: Discuss the role of statistics in market research and its impact on business strategy.',
    'Question 10: Illustrate the use of probability distributions in assessing business risks.',
    // Add more questions as needed
  ];

  // Example array of placeholder answers
  const answers = [
    'Probability is the likelihood of an event occurring. In business, it helps assess and quantify uncertainty in decision-making.',
    'Correlation measures the relationship between two variables, while causation implies a cause-and-effect relationship. Understanding this difference is crucial to avoid making false assumptions in statistical analysis.',
    'Hypothesis testing involves formulating and testing a hypothesis using statistical methods. For example, testing if a new marketing strategy significantly increases product sales.',
    'Regression analysis helps analyze the relationship between a dependent variable and one or more independent variables, aiding in business forecasting and decision-making.',
    'The central limit theorem states that the distribution of the sum (or average) of a large number of independent, identically distributed random variables approaches a normal distribution. This has implications for statistical inference in business analysis.',
    'Standard deviation measures the spread of values in a dataset. In a business context, it helps assess the risk or volatility of investment returns.',
    'The time value of money recognizes that a sum of money has different values at different times. In finance, it influences investment decisions, loan agreements, and other financial transactions.',
    'Descriptive statistics summarize and describe the main features of a dataset, while inferential statistics make inferences and predictions about a population based on a sample. For example, calculating the mean is descriptive, while conducting a hypothesis test is inferential.',
    'Statistics play a crucial role in market research by analyzing and interpreting data to identify market trends, consumer behavior, and competitive insights, guiding effective business strategies.',
    'Probability distributions, such as the normal distribution, are used to model and assess the likelihood of various outcomes, helping businesses evaluate and manage risks.',
    // Add more answers as needed
  ];

  useEffect(() => {
    console.log('MathStatisticsBusinessShortQuestionsPage rendered');
  }, []);

  return (
    <div>
      <Header />
      <div className="short-questions-container">
        <h1>Short Questions For Mathematics & Statistics for Business {code}</h1>
        {mathStatisticsBusinessShortQuestions.map((question, index) => (
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

export default MathStatisticsBusinessShortQuestionsPage;
