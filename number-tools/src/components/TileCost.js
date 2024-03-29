import React, { useState } from 'react'
import Tool from './Tool'
import Input from './Input'

const TileCost = () => {
  const [width, setWidth] = useState(0)
  const [length, setLength] = useState(0)
  const [cost, setCost] = useState(0)
  const [output, setOutput] = useState('')
  return(
    <Tool title='Cost of Tile to Cover Floor'>
      <Input label='Width' type='number' setText={setWidth} />
      <Input label='Length' type='number' setText={setLength} />
      <Input label='Cost' type='number' setText={setCost} />
      <button onClick={() => setOutput(`${width * length * cost}`)}>Enter</button>
      <textarea cols='50' value={output} disabled></textarea>
    </Tool>
  )
}

export default TileCost