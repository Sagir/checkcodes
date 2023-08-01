// PageHome.js

import React from 'react'

const PageHome = ({onPageChange}) => {
  return (
    <div className="page-container">
      <h1>Page Home</h1>
      <button onClick={() => onPageChange('page2')}>Numbers</button>
    </div>
  )
}

export default PageHome
