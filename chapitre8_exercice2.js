// Leet Speak

// Renvoie l'équivalent "leet speak" d'une lettre
function convertirLettreLeet(lettre) {
  // Par défaut, la lettre ne change pas
  let lettreLeet = lettre;
  switch (lettre.toLowerCase()) {
    case "a":
      lettreLeet = "4";
      break;
    case "b":
      lettreLeet = "8";
      break;
    case "e":
      lettreLeet = "3";
      break;
    case "l":
      lettreLeet = "1";
      break;
    case "o":
      lettreLeet = "0";
      break;
    case "s":
      lettreLeet = "5";
      break;
    case "t":
      lettreLeet = "7";
      break;
  }
  return lettreLeet;
}

// Renvoie un mot converti en "leet speak"
function convertirMotLeet(mot) {
  let motLeet = "";
  for (const lettre of mot) {
    motLeet += convertirLettreLeet(lettre);
  }
  return motLeet;
}

console.log(convertirMotLeet("Hello World!")); // "H3110 W0r1d!"
console.log(convertirMotLeet("Noob")); // "N008"
console.log(convertirMotLeet("Hacker")); // "H4ck3r"
