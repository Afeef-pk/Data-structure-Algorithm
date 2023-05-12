//find factorial
function factroial(n) {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact = fact * i;
  }
  return fact;
}
console.log(factroial(5));

//factorial using recursion
function Recursivefactorial(n) {
  if (n == 0) return 1;
  return n * Recursivefactorial(n - 1);
}
const n = Recursivefactorial(5);
console.log("n! " + n);

//fibanocci series
function fibanocci(n) {
  let arr = [0, 1];
  for (let i = 2; i < n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr;
}
console.log(fibanocci(10));

//fibanocci series using recursion
function recursiveFibanocci(n) {
  if (n < 2) return n;
  return recursiveFibanocci(n - 1) + recursiveFibanocci(n - 2);
}

function printFibonacciSeries(n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr[i] = recursiveFibanocci(i);
  }
  return arr;
}

console.log(printFibonacciSeries(10));

