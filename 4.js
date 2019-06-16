let arrNumber = [6,22,34,15,2,13,26,57,42,32];

let max = arrNumber[0];

for (let i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] >= max) {
        max = arrNumber[i];
    }
}

let min = arrNumber[0];

for (let i = 0; i < arrNumber.length; i++) {
    if (arrNumber[i] < min) {
        min = arrNumber[i];
    }
}

console.log(min);
console.log(max);

arrNumber.sort(function(a,b){
    return a - b;
})

console.log(arrNumber);

arrNumber.sort(function(a,b){
    return b - a;
})

console.log(arrNumber);


