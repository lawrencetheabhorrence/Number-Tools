import primeFactorHelper from './primeFactorHelper'

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

const primeGen => {
  // generates primes through the euclidean method
  let i = 1
  let primes = [2]
  for (x of primes)
    i *= x
  i++
  primes.push(i)
}

// BINARY - DEC CONVERSION

const confirmBinary = n => n.match(/[^0-1]+/) === null

const binToDec = n => {
  // splits the digits into bits
  // the reducer simply multiplies each bit by 2 raised to their index
  // note: the bits are evaluated left to right
  const reducer = (accum, val, i, digits) => Math.pow(2, digits.length - 1 - i)*parseInt(val)
  return confirmBinary(n) ? n.split('').reduce(reducer) : 'Not Binary'
}

const dtbHelper = (n, out) =>
  // helper function for the decToBin function
  if (n == 0) return out.split('').reverse().join('') // reverses the binary bits
  return (n % 2 === 1) ? dtbHelper((n-1) / 2, out.concat('1')) : dtbHelper(n / 2, out.concat('0')) // determines binary bits (tho in reverse) ??

const decToBin = (n) => dtbHelper(n, "")

export default { fibonacciUpTo, factorialLoop, factorialRecursion, primeFactorization, primeGen, binToDec, decToBin}