// Page2.js

import React from 'react'

const Page2 = ({onPageChange}) => {
  return (
    <div className="page-container">
      <h1>Page 2</h1>
      <button onClick={() => onPageChange('prime')}>Prime Number</button>
      <button onClick={() => onPageChange('palindrome')}>Palindrome</button>
      <button onClick={() => onPageChange('armstrong')}>Armstrong</button>
    </div>
  )
}

export default Page2
