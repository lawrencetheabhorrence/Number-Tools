import primeFactorHelper from './primeFactorHelper'
import binHelper from './binHelper.js'

const timeFunction = (func, n) => {
  const t0 = new Date.getTime()
  const result = func(n)
  const t1 = new Date.getTime()
  return `Result: ${result} \n The operation took ${t1-t0}`
}

const fibonacciUpTo = n => {
  if (n > 0) {
    if (n === 1) return '1'
    if (n === 2) return '1 1'
    else {
      let out = '1 1 '
      let a1 = 1
      let a2 = 1
      for (let x = 3; x <= n; x++) {
        const sum = a1 + a2
        a1 = a2
        a2 = sum
        out += sum + ' '
      }
      return out.trim()
    }
  } else {
    return 'Invalid Input'
  }
}

// FACTORIAL FUNCTIONS

const factorialLoop = n => {
  if (n > -1) {
    if (n === 0 || n === 1) return 1
    else {
      let x = 1
      for (let i = n; i > 0; i--)
        x *= i
      return x
    }
  }
}

const factorialRecursion = n => {
  if (n < 0) return null
  if (n === 0 || n === 1) return 1
  return n * factorialRecursion(n - 1)
}

// PRIME FACTORIZATION AND GENERATION FUNCTIONS

const primeFactorization = n => {
  let factors = primeFactorHelper.listOfFactors(n)
  factors.map(f => `+${primeFactorHelper.powerOfFactor(n, f)}+`)
  return factors.join
}

const primeGen = () => {
  // generates primes through the euclidean method
  let i = 1
  let primes = [2]
  for (let x of primes)
    i *= x
  i++
  primes.push(i)
}

// BINARY - DEC CONVERSION

const binToDec = n => {
  // splits the digits into bits
  // the reducer simply multiplies each bit by 2 raised to their index
  // note: the bits are evaluated left to right
  const reducer = (accum, val, i, digits) => Math.pow(2, digits.length - 1 - i)*parseInt(val)
  return binHelper.confirmBinary(n) ? n.split('').reduce(reducer) : 'Not Binary'
}
const decToBin = (n) => binHelper.dtbHelper(n, '')

const changeDenom = (amount, cost, coins, values) => {
  if (coins.length === values.length) {
    if (cost > amount) return 'Pay more you cheapskate'
    const change = (amount - cost) * 100
    coins.map((coin, i, coinsList) => Math.floor((change - (i * coinsList[i] * values[i])) / values[i]))
    return `Bills: ${coins[0]} \tQuarters: ${coins[1]} \nDimes: ${coins[2]} \tNickels: ${coins[3]} \tPennies: ${coins[4]}`
  }
}

const fastExpo = (n, k) => {
  if (n === 0 || n === 1) return n
  return (k % 2 === 0) ? n * n * fastExpo(n, k - 2) : n * fastExpo(n, k - 1)
}

const numberNameChunk = n => {
  // names numbers up to 999

  if (n === 0) return ''

  const ones = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
  const tens = ['twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
  const tenSet = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
  let out = ''
  let divisor = 1

  while (Math.floor(n / divisor) !== 0) {
    const digit = Math.floor(n / divisor) % 10

    if (divisor === 1 && digit > 0) out = ones[digit - 1] + out // ones place
    if (divisor === 10) {
      if (digit === 1)  out = tenSet[n % 10] // if tens place is 1, return the number name for the tens
      if (digit > 2) out = tens[digit - 2] + ' ' + out
    }
    if (divisor === 100) out = ones[digit - 1] + ' hundred ' + out // hundreds place

    divisor *= 10
  }

  return out
}

const numberNames = n => {
  // handles input up to 1 million
  if (n > Math.pow(10, 6)) return 'enter a smaller number'
  if (n < 0) return 'negative numbers not yet supported'
  if (n === Math.pow(10, 6)) return 'one million'
  if (n === 0) return 'zero'

  const firstChunk = n % 1000
  const secondChunk = Math.floor(n / 1000)
  if (secondChunk > 0) return numberNameChunk(secondChunk) + ' thousand ' + numberNameChunk(firstChunk)

  return numberNameChunk(firstChunk)
}

export default { fibonacciUpTo, factorialLoop, factorialRecursion, primeFactorization, primeGen, binToDec, decToBin, changeDenom, fastExpo, numberNames }