import React from 'react';



const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
    
  <ul className='statistic-container'>
 
<h2 className="statistic-title">Statistic</h2>
<li>
  <span className='counter-good'>  Good : {good}</span></li>
<li>
  <span className='counter-neutral'> Neutral : {neutral}</span></li>
<li>
  <span className='counter-bad'> Bad : {bad}</span></li>
<li>
  <span className='counter-total'>Total : {total}</span>
</li>
<li>
  <span className='counter-feedback-percentage'>Positive feedback : {positivePercentage}%</span>
</li>
</ul>

);

export default Statistics;



