/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';
const vowels = ['a', 'e', 'i', 'o', 'u'];

// Dichiara la funzione qui.

function contaVocali (word, vocali){
    let count = 0;
    for (i=0; i < word.length; i++){
        if (vocali.includes (word[i])){
            count ++;
        }
    }
    return count;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(contaVocali(word, vowels))


//Risultato atteso se si passa 'javascript': 3 (a, a, i)