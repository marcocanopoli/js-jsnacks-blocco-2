/*
Snack 3
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). 
La funzione restituirà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
*/

var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var numsCopy = copyArrayInRange(nums, 2, 6);
console.log(numsCopy);

//----- FUNCTIONS -----//
//returns copy of array values included in specified range (a < b)
function copyArrayInRange(array, a, b) {
    var arrayCopy = [];
    if (b >= array.length){
        alert("Range non valido: la posizione " + b + " nell'array di lunghezza " + array.length + " non esiste");
    } else if (a > b) {
        alert("Range non valido: " + a + " e' maggiore di " + b);
    } else {
        for (var i = a; i <= b; i++) {
            arrayCopy.push(array[i]);
        }
    }
    return arrayCopy;
}