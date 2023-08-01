// PageArmstrong.js
import React, {useState} from 'react'

const PageArmstrong = () => {
  const [inputNumber, setInputNumber] = useState('')
  const [isArmstrong, setIsArmstrong] = useState(null)

  const checkArmstrong = () => {
    const numberString = inputNumber.toString()
    const n = numberString.length
    let sum = 0

    for (let digit of numberString) {
      sum += parseInt(digit) ** n
    }

    setIsArmstrong(sum === parseInt(inputNumber))
  }

  return (
    <div style={styles.pageContainer}>
      <h1 style={styles.heading}>Armstrong Check</h1>
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={inputNumber}
          onChange={e => setInputNumber(e.target.value)}
          style={styles.input}
        />
        <button onClick={checkArmstrong} style={styles.button}>
          Check Armstrong
        </button>
      </div>
      <div style={styles.outputBox}>
        {isArmstrong === true && (
          <p style={styles.outputMessage}>It is an Armstrong number.</p>
        )}
        {isArmstrong === false && (
          <p style={styles.errorMessage}>It is not an Armstrong number.</p>
        )}
        {isArmstrong === null && (
          <p>Enter a number to check if it is an Armstrong number.</p>
        )}
      </div>
    </div>
  )
}

export default PageArmstrong

const styles = {
  pageContainer: {
    textAlign: 'center',
    padding: '20px',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  inputContainer: {
    marginBottom: '20px',
  },
  input: {
    padding: '8px',
    marginRight: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '16px',
  },
  button: {
    padding: '8px 12px',
    background: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  outputBox: {
    fontSize: '18px',
  },
  outputMessage: {
    color: 'green',
  },
  errorMessage: {
    color: 'red',
  },
}
