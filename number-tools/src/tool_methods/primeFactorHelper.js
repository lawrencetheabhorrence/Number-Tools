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
    if (prime) primes.push(k)
  }
  return primes
}

// look for the exponent of each of the primes
const powerOfFactor = (n, factor) => {
  if (n % factor !== 0) return ''
  let power = 0
  for (power; n % power !== 0; power++)
    n = Math.floor(n / factor)

  return power > 1 ? `${factor}^${power}` : `${factor}`
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