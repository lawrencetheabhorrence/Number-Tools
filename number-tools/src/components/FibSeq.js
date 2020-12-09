import React, { useState } from 'react'
import Tool from './Tool'
import Input from './Input'
import Tools from '../tool_methods/tool_methods'

const FibSeq = () => {
  const [input, setInput] = useState(0)
  const [output, setOutput] = useState('')
  return(
    <Tool title='Fibonacci Sequence Generator'>
      <Input label='Fibonacci sequence up to...' type='number' setText={setInput} />
      <button onClick={() => setOutput(Tools.fibonacciUpTo(input))}>Enter</button>
      <textarea cols='50' value={output} disabled></textarea>
    </Tool>
  )
}

export default FibSeq