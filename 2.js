function isPrime(n) {
    if (n < 2) return false
    if (n === 2) return true

    for (let i = 2; i <= Math.ceil(Math.sqrt(n)); i++) {
        if (n % i === 0) { return false; }

    }

    return true
}

function rightTriangle(num) {
    let result = '';
    
    for (let i = 0; i <= num; i++) {        
        let j = 0;
        let constPrime = 2
        while(j<i){
            if(isPrime(constPrime)){
                result += ' '+constPrime;
                j++
            }
            constPrime++
            
        }
        result += '\n'
    }

    console.log(result)
}

rightTriangle(5);