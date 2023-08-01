// PagePrime.js

import React, {useState} from 'react'

const PagePrime = () => {
  const [inputNumber, setInputNumber] = useState('')
  const [isPrime, setIsPrime] = useState(null)

  const checkPrime = () => {
    const number = parseInt(inputNumber)

    if (isNaN(number) || number <= 1) {
      setIsPrime(false)
      return
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        setIsPrime(false)
        return
      }
    }

    setIsPrime(true)
  }

  return (
    <div className="page-container">
      <h1>Prime Number Check</h1>
      <div>
        <input
          type="text"
          value={inputNumber}
          onChange={e => setInputNumber(e.target.value)}
        />
        <button onClick={checkPrime}>Check Prime</button>
      </div>
      <div className="output-box">
        {isPrime === true && <p>It is a prime number.</p>}
        {isPrime === false && <p>It is not a prime number.</p>}
        {isPrime === null && <p>Enter a number to check if it is prime.</p>}
      </div>
    </div>
  )
}

export default PagePrime
