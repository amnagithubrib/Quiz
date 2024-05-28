import React, { useState } from 'react';

const Question = ({ question, options, correctAnswer, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    onSelect(option, option === correctAnswer);
  };

  return (
    <div className={`question-container ${selectedOption === correctAnswer ? 'correct-option' : 'normal-option'}`}>
      <p>{question}</p>
      <ul className="options-list">
        {options.map((option) => (
          <li
            key={option}
            onClick={() => handleOptionSelect(option)}
            className={`${option === selectedOption ? 'selected-option' : 'normal-option'} ${option === correctAnswer ? 'correct-answer' : ''}`}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
