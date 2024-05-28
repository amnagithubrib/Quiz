import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "../ACT201/Short.css";
import Header from '../../Header';
import Footer from '../../Footer';

const CostShortQuestionsPage = () => {
  const { code } = useParams();

  // Example array of short questions related to cost accounting
  const costShortQuestions = [
    'Question 1: What is the primary objective of cost accounting?',
    'Question 2: Explain the difference between direct costs and indirect costs.',
    'Question 3: Define cost allocation and provide an example.',
    'Question 4: What is the significance of cost control in business?',
    'Question 5: Describe the concept of standard costing.',
    'Question 6: Explain the term "variable costing" in cost accounting.',
    'Question 7: How does activity-based costing differ from traditional costing methods?',
    'Question 8: What is a cost driver, and why is it important in cost accounting?',
    'Question 9: Define overhead costs and give examples.',
    'Question 10: What is the purpose of a cost-volume-profit (CVP) analysis?',
    // Add more questions as needed
  ];

  // Example array of placeholder answers for cost accounting
  const costAnswers = [
    'The primary objective of cost accounting is to provide detailed information about costs for effective decision-making and control.',
    'Direct costs are directly traceable to a product or service, while indirect costs are not easily attributable and need allocation.',
    'Cost allocation is the process of assigning indirect costs to specific cost objects. An example is allocating overhead costs to products based on machine hours.',
    'Cost control involves managing and regulating costs to ensure they stay within the budgeted limits, contributing to overall financial stability.',
    'Standard costing involves establishing predetermined cost standards for various elements of production and comparing actual costs with these standards.',
    'Variable costing is an approach that only considers variable manufacturing costs as product costs, excluding fixed manufacturing overhead.',
    'Activity-based costing allocates indirect costs based on the activities that drive the costs, providing a more accurate cost assignment.',
    'A cost driver is a factor that directly influences the costs of an activity. It is essential for understanding the cause-and-effect relationship between activities and costs.',
    'Overhead costs include indirect manufacturing costs like rent, utilities, and depreciation. Examples vary by industry and business.',
    'Cost-volume-profit analysis helps analyze the relationship between costs, volume, and profit to make informed business decisions.',
    // Add more answers as needed
  ];

  useEffect(() => {
    console.log('CostShortQuestionsPage rendered');
  }, []);

  return (
    <div>
      <Header />
      <div className="short-questions-container">
        <h1 className="subject-title"> <b>Short Questions For Cost Accounting {code}</b></h1>
        <ul>
          {costShortQuestions.map((question, index) => (
            <li key={index} className="question-item">
              <strong>{question}</strong>
              <p className="answer">{costAnswers[index]}</p>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default CostShortQuestionsPage;
