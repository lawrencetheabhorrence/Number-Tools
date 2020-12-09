import React from 'react'
import './index.css'
import FibSeq from 'components/FibSeq'
import Factorial from 'components/Factorial'
import PrimeFactor from 'components/PrimeFactor'
import PrimeGen from 'components/PrimeGen'
import TileCost from 'components/TileCost'
import BinDec from 'components/BinDec'
import CoinFlip from 'components/CoinFlip'
import Change from 'components/Change'
import FastExpo from 'components/FastExpo'
import NumberNames from 'components/NumberNames'

const App = () => {
  return (
    <div id='main'>
      <FibSeq />
      <Factorial />
      <PrimeFactor />
      <PrimeGen />
      <TileCost />
      <BinDec />
      <CoinFlip />
      <Change />
      <FastExpo />
      <NumberNames />
    </div>
  )
}

export default App
