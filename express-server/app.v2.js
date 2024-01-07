function isPrime(number) {
  // Check if the number is less than 2
  if (number < 2) {
    return false;
  }

  // Loop from 2 to the square root of the number
  for (var i = 2; i <= Math.sqrt(number); i++) {
    // If the number is divisible by any value in the loop, it's not a prime number
    if (number % i === 0) {
      return false;
    }
  }

  // If the loop completes without finding a divisor, the number is prime
  return true;
}

// Example usage:
var result = isPrime(17);
console.log(result); // Output: true
console.log(result); // Output: true
