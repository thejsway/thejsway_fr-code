// Comptes bancaires

class CompteBancaire {
  constructor(titulaire) {
    this.titulaire = titulaire;
    this.solde = 0;
  }
  // Ajoute un montant au solde
  crediter(montant) {
    this.solde += montant;
  }
  // Renvoie la description du compte
  decrire() {
    return `titulaire: ${this.titulaire}, solde: ${this.solde}`;
  }
}

const listeComptes = [];

// Ajoute 3 comptes bancaires à la liste
listeComptes.push(new CompteBancaire("Alex"));
listeComptes.push(new CompteBancaire("Clovis"));
listeComptes.push(new CompteBancaire("Marco"));

// Crédite et décrit chaque compte
listeComptes.forEach(compte => {
  compte.crediter(1000);
  console.log(compte.decrire());
});
