// PagePalindrome.js

import React, { useState } from 'react';

const PagePalindrome = () => {
  const [inputNumber, setInputNumber] = useState('');
  const [isPalindrome, setIsPalindrome] = useState(null);

  const checkPalindrome = () => {
    const numberString = inputNumber.toString();
    const reversedString = numberString.split('').reverse().join('');
    setIsPalindrome(numberString === reversedString);
  };

  return (
    <div className="page-container">
      <h1>Palindrome Check</h1>
      <div>
        <input
          type="text"
          value={inputNumber}
          onChange={(e) => setInputNumber(e.target.value)}
        />
        <button onClick={checkPalindrome}>Check Palindrome</button>
      </div>
      <div className="output-box">
        {isPalindrome === true && <p>It is a palindrome number.</p>}
        {isPalindrome === false && <p>It is not a palindrome number.</p>}
        {isPalindrome === null && <p>Enter a number to check if it is a palindrome.</p>}
      </div>
    </div>
  );
};

export default PagePalindrome;
