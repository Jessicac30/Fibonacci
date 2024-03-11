let numero = 13; // número a ser verificado
let a = 0;
let b = 1;
let c = a + b;

while (c <= numero) {
  if (c === numero) {
    console.log(numero + " pertence à sequência de Fibonacci.");
    break;
  }
  a = b;
  b = c;
  c = a + b;
}

if (c > numero) {
  console.log(numero + " não pertence à sequência de Fibonacci.");
}




