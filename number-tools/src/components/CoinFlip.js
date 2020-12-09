import React, { useState } from 'react'
import Tool from './Tool'

const CoinFlip = () => {
  const [output, setOutput] = useState('')
  const flip = () => Math.random() > 0.5 ? 'Heads' : 'Tails'
  return(
    <Tool title='Coin Flip Simulator'>
      <button onClick={() => setOutput(flip())}>Flip Coin</button>
      <textarea cols='50' value={output} disabled></textarea>
    </Tool>
  )
}

export default CoinFlip