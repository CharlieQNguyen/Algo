num = 5;

function prime(num) {
  //if number is less then 1 then not prime
  if (num < 1) {
    return false;
  }
  //loop up to the number using modulous to determine if the number is not prime. If any modulous is 0 before touching the number then it is not a prime number.
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

prime(num);
