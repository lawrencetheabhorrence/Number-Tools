import React, { useState } from 'react'
import Tool from './Tool'
import Input from './Input'
import Tools from '../tool_methods/tool_methods'

const PrimeFactor = () => {
  const [input, setInput] = useState(0)
  const [output, setOutput] = useState('')
  return (
    <Tool title='Prime Factorization'>
      <Input label='Of...' type='number' setText={setInput} />
      <button onClick={() => setOutput(Tools.primeFactorization(input))}>Enter</button>
      <textarea cols="50" disabled>{output}</textarea>
    </Tool>
  )
}

export default PrimeFactor