/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// Dichiara la funzione qui.

// function hello(userName){
//     console.log('Ciao'+ ' ' + userName);
// }

// bonus
const hello = (userName) => {
    console.log('Ciao' + ' ' + userName);
}
// Invoca la funzione qui e stampa il risultato in console

hello(userName);


//Risultato atteso se si passa 'Mario': // ciao Mario
