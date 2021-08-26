// chiedi all’utente il cognome
// inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
// stampa la lista ordinata alfabeticamente
// scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova

let listaCognomi = ['Bianchi','Neri','Rossi','Verdi','Gialli'];
let cognomeInserito = prompt('Inserisci un cognome');
listaCognomi.unshift (cognomeInserito);

listaCognomi.sort(function (a, b) { return a.localeCompare(b); });

for (let contatore = 0 ; contatore<listaCognomi.length ; contatore++ ) {
console.log (listaCognomi + (contatore + 1));
}