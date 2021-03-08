// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// 1. chiediamo all'utente i due input
do {
  var selezione = prompt("Inserisci pari o dispari");
} while ( !(selezione == "pari" || selezione == "dispari") );

do {
  var numeroUtente = parseInt(prompt("Inserisci un numero tra 1 e 5 compresi"));
} while (isNaN(numeroUtente) || numeroUtente > 5 || numeroUtente < 1);

console.log(selezione);
console.log(numeroUtente);
