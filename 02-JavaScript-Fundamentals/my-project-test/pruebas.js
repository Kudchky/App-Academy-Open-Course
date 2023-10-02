const isPrime = function(number){
  if(number < 2)  return false;

  for(let i = 2; i < number; i++){
      if(number % i === 0){
          return false;
      }
  }

  return true;
}
console.log(isPrime(12));

const numPrimes = function(number){
  const primes = [];

  for(let i = 0; i < number; i++){
      if(isPrime(i)){
          primes.push(i);
      }
  }
  return primes;
}

console.log(numPrimes(12));
//foals: numbs primes that can divide given number
//input: number(integer)
//output: array(integer)
//

const primeFactors = function(num){
  //1. hacer una function que devuelva array con todos los numeros primos
  const arrPrimes = numPrimes(num);
  const dividePrimes = [];

  for(let i = 0; i < arrPrimes.length; i++){
      let prime = arrPrimes[i]
      if(num % prime === 0){
          dividePrimes.push(prime);
      }
  }

  return dividePrimes;

}


console.log(primeFactors(12));  // [2, 3]
console.log(primeFactors(7));   // [7]
console.log(primeFactors(16));  // [2]
console.log(primeFactors(30));  // [2, 3, 5]
console.log(primeFactors(35));  // [5, 7]
console.log(primeFactors(49));  // [7]
console.log(primeFactors(128)); // [2]
