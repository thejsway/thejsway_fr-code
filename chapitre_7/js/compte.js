/*
Exercice : compte bancaire
*/

var compte = {
    titulaire: "Jérôme",
    solde: 0,

    // Crédite le compte d'un certain montant
    crediter: function (montant) {
        this.solde = this.solde + montant;
    },
    // Débite le compte d'un certain montant
    debiter: function (montant) {
        this.solde = this.solde - montant;
    },
    // Renvoie la description du compte
    decrire: function () {
        var description = "Titulaire : " + this.titulaire +
            ", solde : " + this.solde + " euros";
        return description;
    }
};

console.log(compte.decrire());
var credit = Number(prompt("Entrez le montant à créditer :"));
compte.crediter(credit);
console.log(compte.decrire());
var debit = Number(prompt("Entrez le montant à débiter :"));
compte.debiter(debit);
console.log(compte.decrire());