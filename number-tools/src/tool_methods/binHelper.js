const confirmBinary = n => n.match(/[^0-1]+/) === null

const dtbHelper = (n, out) => {
  // helper function for the decToBin function
  if (n === 0) return out.split('').reverse().join('') // reverses the binary bits
  return (n % 2 === 1) ? dtbHelper((n-1) / 2, out.concat('1')) : dtbHelper(n / 2, out.concat('0')) // determines binary bits (tho in reverse) ??
}

export default {confirmBinary, dtbHelper}