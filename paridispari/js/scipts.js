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
// console.log(selezione);
// console.log(numeroUtente);

// 2. funzione che genera un numero casuale tra 1 e 5 compresi
function casuale() {
  var numeroCasuale = Math.floor(Math.random() * 5) + 1;
  return numeroCasuale;
}

// 3. sommo i due numeri
var somma = numeroUtente + casuale();
console.log(somma);

// 4. funzione che determina se la somma è pari o dispari
function pariDispari(numero) {
  if ( numero % 2 == 0) {
    return "pari";
  } else {
    return "dispari";
  }
}

// 5 verifico se l'utente ha vinto
if ( pariDispari(somma) == selezione ) {
  alert("Hai vinto!");
} else {
 alert("Mi dispiace, hai perso");
}
