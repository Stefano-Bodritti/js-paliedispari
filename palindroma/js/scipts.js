// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// 1. chiedo parola all'utente
var parola = prompt("Inserisci una parola");

// 2. funzione che inverte la parola
function palindroma(parola) {
  var parolaInversa = "";
  // 3. prendo i caratteri dall'ultimo al primo e creo la parola inversa
  for (var i = parola.length; i >= 0; i--) {
    parolaInversa += parola.charAt(i);
  }
  // 4. verifico se la parola inversa è uguale alla parola
  if (parola == parolaInversa) {
    return true;
  } else {
    return false;
  }
}

// 5. stampo il risultato
if ( palindroma(parola) ) {
  alert("La parola è palindroma");
} else {
  alert("La parola non è palindroma");
}
