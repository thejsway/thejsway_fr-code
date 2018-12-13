// Les Trois Mousquetaires

const mousquetaires = ["Athos", "Porthos", "Aramis"];

console.log("Voici les Trois Mousquetaires:");
for (let i = 0; i < mousquetaires.length; i++) {
  console.log(mousquetaires[i]);
}

mousquetaires.push("D'Artagnan");
console.log("Ils sont quatre à présent:");
mousquetaires.forEach(mousquetaire => {
  console.log(mousquetaire);
});

mousquetaires.splice(2, 1);
console.log("Le pauvre Aramie est mort...");
for (const mousquetaire of mousquetaires) {
  console.log(mousquetaire);
}
