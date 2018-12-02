// Baccalauréat

const moyenne = 11;

if (moyenne < 10) {
  console.log("Le candidat est recalé");
} else if (moyenne < 12) {
  // 10 <= moyenne < 12
  console.log("Le candidat est reçu");
} else {
  // moyenne >= 12
  console.log("Le candidat est reçu avec mention");
}
