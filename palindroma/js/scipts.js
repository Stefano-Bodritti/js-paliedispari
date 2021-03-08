// 1. chiedo parola all'utente
var parola = prompt("Inserisci una parola");

// 2. funzione che inverte la parola
function palindroma(parola) {
  var parolaInversa = "";
  // 3. prendo i caratteri dall'ultimo al primo e creo la parola inversa
  for (var i = parola.length; i >= 0; i--) {
    parolaInversa += parola.charAt(i);
  }
  return parolaInversa;
}

console.log(palindroma(parola));
