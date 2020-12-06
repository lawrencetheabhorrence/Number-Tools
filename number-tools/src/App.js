import React from 'react'
import './index.css'
import FibSeq from 'components/FibSeq'
import Factorial from 'components/Factorial'
import PrimeFactor from 'components/PrimeFactor'

const App = () => {
  return (
    <div id='main'>
      <FibSeq />
      <Factorial />
      <PrimeFactor />
    </div>
  )
}

export default App
