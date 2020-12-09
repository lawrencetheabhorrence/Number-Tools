import React, { useState } from 'react'
import Tool from './Tool'
import Tools from '../tool_methods/tool_methods'

const PrimeGen = () => {
  const [output, setOutput] = useState('')
  const [primes, setPrimes] = useState([2])
  const generatePrime = () => {
    const nextPrime = Tools.primeGen(primes)
    setPrimes(primes.concat(nextPrime))
    setOutput(nextPrime)
  }
  return(
    <Tool title='Prime Generation'>
      <button onClick={() => setOutput(generatePrime)}>Next Prime</button>
      <textarea cols='50' value={output} disabled></textarea>
    </Tool>
  )
}

export default PrimeGen