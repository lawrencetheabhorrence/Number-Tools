import React, { useState } from 'react'
import Tool from './Tool'
import Input from './Input'
import Tools from '../tool_methods/tool_methods'

const Change = () => {
  const [price, setPrice] = useState(0)
  const [paid, setPaid] = useState(0)
  const [output, setOutput] = useState('')
  return (
    <Tool title='Change Calculator'>
      <Input label='Enter Price: ' type='number' setText={setPrice} />
      <Input label='Enter Amount Paid: ' type='number' setText={setPaid} />
      <button onClick={() => setOutput(Tools.changeDenom(paid, price, [], [1, 0.25, 0.1, 0.5, 0.01]))} >Calculate</button>
      <textarea cols='50' disabled>{output}</textarea>
    </Tool>
  )
}

export default Change