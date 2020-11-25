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

const primeFactorization = n => {
  let factors = primeFactorHelper.listOfFactors(n)
  factors.map(f => `+${primeFactorHelper.powerOfFactor(n, f)}+`)
  return factors.join
}

export default { fibonacciUpTo, factorialLoop, factorialRecursion, primeFactorization }