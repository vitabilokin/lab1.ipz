function fibonacci(n) {
  if (n < 0) {
    throw new Error("n має бути невід'ємним числом");
  }
  if (n === 0) return 0;
  if (n === 1) return 1;

  let a = 0;
  let b = 1;

  for (let i = 2; i <= n; i++) {
    const next = a + b;
    a = b;
    b = next;
  }

  return b;
}

function printFibonacciSequence(count) {
  const sequence = [];
  for (let i = 0; i < count; i++) {
    sequence.push(fibonacci(i));
  }
  console.log(`Перші ${count} чисел Фібоначчі:`);
  console.log(sequence.join(', '));
}

const n = 10;
console.log(`Число Фібоначчі під номером ${n}: ${fibonacci(n)}`);

printFibonacciSequence(15);