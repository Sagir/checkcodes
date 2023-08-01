// App.js

import React, {useState} from 'react'
import PageHome from './PageHome'
import Page2 from './Page2'
import PagePrime from './PagePrime'
import PagePalindrome from './PagePalindrome'
import PageArmstrong from './PageArmstrong'

const App = () => {
  const [currentPage, setCurrentPage] = useState('home')

  const handlePageChange = page => {
    setCurrentPage(page)
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <PageHome onPageChange={handlePageChange} />
      case 'page2':
        return <Page2 onPageChange={handlePageChange} />
      case 'prime':
        return <PagePrime />
      case 'palindrome':
        return <PagePalindrome />
      case 'armstrong':
        return <PageArmstrong />
      default:
        return null
    }
  }

  return <div className="app-container">{renderPage()}</div>
}

export default App
