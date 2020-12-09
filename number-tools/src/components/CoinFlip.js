import React, { useState } from 'react'
import Tool from './Tool'
import Input from './Input'
import Tools from '../tool_methods/tool_methods'

const CoinFlip = () => {
  const [output, setOutput] = useState('')
  const flip = () => Math.random() > 0.5 ? 'Heads' : 'Tails'
  return(
    <Tool title='Coin Flip Simulator'>
      <button onClick={() => setOutput(flip())}>Flip Coin</button>
      <textarea cols='50' disabled>{output}</textarea>
    </Tool>
  )
}

export default CoinFlip