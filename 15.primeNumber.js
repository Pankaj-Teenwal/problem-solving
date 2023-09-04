/**
 * @description find wether a number is prime or not.
 * prime Number = prime numbers are numbers grether then 1 that only have two factor: 1 and the number itself.
 * 
 * 
 */

const checkPrime=(num)=>{
    let isPrime = true;
    if(num == 0 || num ==1){
        return false;
    }

    for(let i=2; i<num; i++){
        if(num%i===0){
            isPrime=false;
            break;
        }

    }
    if(isPrime){
        return true;
    } 
    else{
        return false;
    }
}

let input = [2, 4,10,18,22,29,3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]

for(let i of input){
    console.log(checkPrime(i));    
}
