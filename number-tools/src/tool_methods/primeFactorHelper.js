// look for primes less than n
const sieve = n => {
  let primes = [2]
  for (let k = 3; k <= n; k++) {
    let prime = true
    for (let i of primes) {
      if (k % i === 0) {
        prime = false
        break
      }
    }
    if (prime) primes = primes.concat(k)
  }
  return primes
}

// look for the exponent of each of the primes
const powerOfFactor = (n, factor) => {
  let power = 0
  for (power; n % factor !== 0; power++)
    n /= factor
  return factor + '^' + power
}

const listOfFactors = n => {
  const factors = sieve (n)
  for (let x = 0; x < factors.length; x++) {
    if (n % factors[x] !== 0) {
      factors.splice(x, 1)
      x--
    }
  }
  return factors
}

export default { listOfFactors, powerOfFactor }