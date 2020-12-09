import React, { useState } from 'react'
import Tool from './Tool'
import Input from './Input'
import Tools from '../tool_methods/tool_methods'

const BinDec = () => {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  return(
    <Tool title='Binary-Decimal converter'>
      <Input label='Enter in Decimal or Binary...' type='text' setText={setInput} />
      <button onClick={() => setOutput(Tools.decToBin(input))}>Decimal to Binary</button>
      <button onClick={() => setOutput(Tools.binToDec(input))}>Binary to Decimal</button>
      <textarea cols='50' value={output} disabled></textarea>
    </Tool>
  )
}

export default BinDec