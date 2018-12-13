// Nombre de voyelles

function compterVoyelles(mot) {
  let nbVoyelles = 0;
  for (const lettre of mot) {
    const lettreMin = lettre.toLowerCase();
    if (
      lettreMin === "a" ||
      lettreMin === "e" ||
      lettreMin === "i" ||
      lettreMin === "o" ||
      lettreMin === "u" ||
      lettreMin === "y"
    ) {
      nbVoyelles++;
    }
  }
  return nbVoyelles;
}

console.log(compterVoyelles("RadAr")); // 2
console.log(compterVoyelles("Tic et Tac")); // 3
console.log(compterVoyelles("Oasis Oasis Oh")); // 7
