import React from 'react'
import Nav from './components/navbar/Nav'

const App = () => {
   const reezy = ['Money', 'Bot' , 'Forex', 'Trading', 'Fun']
  return (
    <div>
    {
      reezy.map((cv) => (
        <h1>{cv}</h1>
      ))
    }
 
  </div>
  )
  }
export default App
