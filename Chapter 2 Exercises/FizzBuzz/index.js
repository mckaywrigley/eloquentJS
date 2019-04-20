for (let i = 0; i <= 100; i++) {
  // divisible by 3 - Fizz
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`${i} FizzBuzz`);
  }
  // divisible by 5 - Buzz
  else if (i % 5 === 0) {
    console.log(`${i} Buzz`);
  }
  // divisible by 3 and 5 - FizzBuzz
  else if (i % 3 === 0) {
    console.log(`${i} Fizz`);
  }
}
