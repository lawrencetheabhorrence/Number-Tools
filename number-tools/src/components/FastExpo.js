import React, { useState } from 'react'
import Tool from './Tool'
import Input from './Input'
import Tools from '../tool_methods/tool_methods'

const FastExpo = () => {
  const [number, setNumber] = useState(0)
  const [expo, setExpo] = useState(0)
  const [output, setOutput] = useState('')
  return (
    <Tool title='Fast Exponentiation'>
      <Input label='Enter Number: ' type='number' setText={setNumber} />
      <Input label='Enter Exponent: ' type='number' setText={setExpo} />
      <button onClick={() => setOutput(Tools.fastExpo(number, expo))}>Calculate</button>
      <textarea cols='50' value={output} disabled></textarea>
    </Tool>
  )
}

export default FastExpo