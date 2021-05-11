/*
Snack 3
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). 
La funzione restituirà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
*/

var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var array2 = copyArrayInRange(array, 2, 7);
console.log(array2);

//----- FUNCTIONS -----//
//returns copy of array values included in specified range (a < b)
function copyArrayInRange (array, a, b) {
    var arrayCopy = [];
    if (b > array.length){
        alert("Range non valido: " + b + " e' maggiore della lunghezza dell'array (" + array.length + ")");
    } else if (a > b ) {
        alert("Range non valido: " + a + " e' maggiore di " + b);
    } else {
        for (var i = 0; i < array.length; i++) {
            if (i >= a && i <= b) {
                arrayCopy.push(array[i]);
            }
        }
    }
    return arrayCopy;
}