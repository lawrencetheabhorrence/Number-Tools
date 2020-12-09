import React, { useState } from 'react'
import Tool from './Tool'
import Tools from '../tool_methods/tool_methods'

const PrimeGen = () => {
  const [output, setOutput] = useState('')
  return(
    <Tool title='Prime Generation'>
      <button onClick={() => setOutput(Tools.primeGen())}>Next Prime</button>
      <textarea cols="50" disabled>{output}</textarea>
    </Tool>
  )
}

export default PrimeGen