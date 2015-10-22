/* 
Exercice : contrôle de saisie
*/

var nombre = 0; // Valeur initiale permettant d'entrer dans la boucle
while ((nombre < 50) || (nombre > 100)) {
    nombre = Number(prompt("Entrez un nombre entre 50 et 100 : "));
}
