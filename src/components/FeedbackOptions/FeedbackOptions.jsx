// src/components/App/FeedbackOptions/FeedbackOptions.js
import React from 'react';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className='buttons'>
    {options.map(option => (
      <button key={option} className={option} onClick={() => onLeaveFeedback(option)}>
        {option}
      </button>
    ))}
  </div>
);

export default FeedbackOptions;
