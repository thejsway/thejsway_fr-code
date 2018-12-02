// FizzBuzz

// Solution avec des if/else
for (let nombre = 1; nombre <= 100; nombre++) {
  if (nombre % 3 === 0 && nombre % 5 === 0) console.log("FizzBuzz");
  else if (nombre % 3 === 0) console.log("Fizz");
  else if (nombre % 5 === 0) console.log("Buzz");
  else console.log(nombre);
}

// Solution alternative construisant le message par concaténation
/* for (let nombre = 1; nombre <= 100; nombre++) {
  let message = ""; // Message initial vide
  if (nombre % 3 === 0) {
    // on ajoute "Fizz" au message
    message += "Fizz";
  }
  if (nombre % 5 === 0) {
    // on ajoute "Buzz" au message
    message += "Buzz";
  }
  if (message === "") {
    // Message vide : on affiche le nombre
    message = nombre;
  }
  console.log(message);
} */
