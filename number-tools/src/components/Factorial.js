import React, {useState} from 'react'
import Tool from './Tool'
import Input from './Input'
import Tools from '../tool_methods/tool_methods'

const Factorial = () => {
  const [input, setInput] = useState(0)
  const [output, setOutput] = useState('')
  return (
    <Tool title='Factorial Calculator'>
      <Input label='Factorial of N...' type='number' setText={setInput} />
      <button onClick={() => setOutput(Tools.timeFunction(Tools.factorialLoop, n))}>Calculate by loop</button>
      <button onClick={() => setOutput(Tools.timeFunction(Tools.factorialRecursion, n))}>Calculate by recursion</button>
      <textarea cols='50' disabled>{output}</textarea>
    </Tool>
  )
}

export default Factorial