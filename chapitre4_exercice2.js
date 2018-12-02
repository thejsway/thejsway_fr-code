// Table de multiplication

const nombre = 7; // Faites varier cette variable entre 1 et 10

console.log(`Table de multiplication de ${nombre}`);

// Solution avec un for
for (let i = 1; i <= 10; i++) {
  console.log(`${nombre} x ${i} = ${nombre * i}`);
}

// Solution alternative avec un while
/* let i = 1;
while (i <= 10) {
  console.log(`${nombre} x ${i} = ${nombre * i}`);
  i++;
} */
