// Modélisation d'un chien

const chien = {
    nom: "Crockdur",
    race: "mâtin de Naples",
    taille: 75,
  
    // Renvoie l'aboiement du chien
    aboyer() {
      return "Grrr ! Grrr !";
    }
  };
  
  // "Crockdur est un mâtin de Naples mesurant 75"
  console.log(`${chien.nom} est un ${chien.race} mesurant ${chien.taille} cm`);
  
  // "Tiens, un chat ! Crockdur aboie : Grrr ! Grrr !"
  console.log(`Tiens, un chat ! ${chien.nom} aboie : ${chien.aboyer()}`);
  