/* 'use strict'
let x = 0;
for(let i = 0; i <= 100; i++){
    x += i;
}
console.log(x);
 */

 // summ 1-100
/* let x = 0;
let i = 0;
while ( x <= 100 ) {
    i += x;
    x++;
} 
console.log (i); */


// вычислить сумму чисел от 1 до 100 но не включая промежутки от 10 до 20 и от 60 до 80

let i = 0;
for (let x = 0; x < 100; x++) {
    if ( x > 10 && x < 20 || x < 80 && x > 60) {
        continue;
    }else {
        i += x;
    }
}
console.log (i);