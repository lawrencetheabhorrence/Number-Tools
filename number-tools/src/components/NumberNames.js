import React, { useState } from 'react'
import Tool from './Tool'
import Input from './Input'
import Tools from '../tool_methods/tool_methods'

const NumberNames = () => {
  const [input, setInput] = useState(0)
  const [output, setOutput] = useState('')
  return (
    <Tool title='Number names up to one million'>
      <Input label='Enter a number' type='number' setText={setInput} />
      <button onClick={() => setOutput(Tools.numberNames(input))}>Name the number</button>
      <textarea cols='50'>{output}</textarea>
    </Tool>
  )
}

export default NumberNames