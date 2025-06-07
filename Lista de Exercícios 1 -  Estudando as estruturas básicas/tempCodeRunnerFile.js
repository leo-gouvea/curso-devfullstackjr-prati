//   15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci utilizando um loop for.

let fibonacci_a = 0;
let fibonacci_b = 1;

console.log("Sequência de Fibonacci: ")

for (let i = 0; i < 10; i++) {
  console.log(fibonacci_a);
  let proximoFibonacci = fibonacci_a + fibonacci_b;
  fibonacci_a = fibonacci_b;
  fibonacci_b = proximoFibonacci;
}