const FizzBuzz = (num) => {
  if (num === 0) return 0;
  if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
  if (num % 3 === 0) return 'Fizz';
  if (num % 5 === 0) return 'Buzz';

  return num;
};

export default FizzBuzz;
