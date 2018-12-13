// Modélisation d'un compte bancaire

const compte = {
  titulaire: "Alex",
  solde: 0,

  // Ajoute un montant au solde
  crediter(montant) {
    this.solde += montant;
  },

  // Renvoie la description du compte
  decrire() {
    return `titulaire: ${this.titulaire}, solde: ${this.solde}`;
  }
};

// "titulaire: Alex, solde: 0"
console.log(compte.decrire());

compte.crediter(250);
compte.crediter(-80);

// "titulaire: Alex, solde: 170"
console.log(compte.decrire());
