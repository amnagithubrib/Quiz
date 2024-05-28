import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../ACT201/Short.css'; 
import Header from "../../Header";
import Footer from '../../Footer';

const MathStatisticsBusinessLongQuestionsPage = () => {
  const { code } = useParams();

  // Example array of long questions related to Mathematics & Statistics for Business
  const mathStatisticsBusinessLongQuestions = [
    {
      question: 'Question 1: Explore the concept of probability and its applications in business decision-making. Provide real-world examples to illustrate its significance.',
      answer: 'Probability is the measure of the likelihood of an event occurring. In business, it is crucial for decision-making under uncertainty. For example, probability is used in risk assessment, pricing strategies, and project management. A business might use probability to estimate the likelihood of meeting sales targets or the success of a marketing campaign.',
    },
    {
      question: 'Question 2: Differentiate between qualitative and quantitative data. How does each type of data contribute to statistical analysis in a business context?',
      answer: 'Qualitative data consists of non-numerical information, such as categories or labels, while quantitative data is numerical and measurable. Both types play essential roles in statistical analysis for businesses. Qualitative data helps in understanding customer preferences, market trends, and brand perception. Quantitative data, on the other hand, is used for numerical measurement, statistical modeling, and making data-driven decisions. Together, they provide a comprehensive basis for strategic business decisions.',
    },
    {
      question: 'Question 3: Explain the steps involved in hypothesis testing. How can businesses use hypothesis testing to gain insights and make informed decisions?',
      answer: 'Hypothesis testing is a statistical method used to make inferences about population parameters based on a sample of data. Businesses can utilize hypothesis testing to validate assumptions and draw conclusions about their operations. The steps involve formulating a hypothesis, collecting data, conducting statistical analysis, and drawing conclusions. For instance, a company may use hypothesis testing to determine the effectiveness of a new marketing strategy or the impact of price changes on sales.',
    },
    {
      question: 'Question 4: Discuss the importance of regression analysis in business forecasting. Provide examples of how businesses can benefit from regression models.',
      answer: 'Regression analysis is a statistical technique used to model the relationship between a dependent variable and one or more independent variables. In business forecasting, regression models help predict future outcomes based on historical data. For instance, a retail business may use regression analysis to forecast sales based on factors like advertising spending, seasonality, and economic indicators. The insights gained from regression analysis enable businesses to make informed decisions and allocate resources effectively.',
    },
    {
      question: 'Question 5: Explore the concept of the central limit theorem and its significance in statistical analysis. How does it impact decision-making in business?',
      answer: 'The central limit theorem states that the distribution of the sum (or average) of a large number of independent, identically distributed random variables approaches a normal distribution. This theorem is fundamental in statistical analysis, especially when dealing with large datasets. In business, the central limit theorem allows for the use of normal distribution assumptions in hypothesis testing, confidence intervals, and other statistical procedures. Understanding its implications helps businesses make reliable inferences from sample data to support decision-making.',
    },
    // Add more long questions and detailed answers as needed
  ];

  useEffect(() => {
    console.log('MathStatisticsBusinessLongQuestionsPage rendered');
  }, []);

  return (
    <div>
      <Header />
      <div className="short-questions-container">
        <h1>Long Questions For Mathematics & Statistics for Business {code}</h1>
        {mathStatisticsBusinessLongQuestions.map((qna, index) => (
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

export default MathStatisticsBusinessLongQuestionsPage;
