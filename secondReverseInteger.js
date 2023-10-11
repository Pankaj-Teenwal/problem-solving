var isSameAfterReversals = function(num) {

    let numCopy = num;

    let firstReverse = 0;

    while(numCopy>0){
        let digit = numCopy%10;
        firstReverse = firstReverse*10+digit
        num = parseInt(numCopy/10);
    }
    console.log(firstReverse)
    let secondReverse = 0;
    let secondReverseInput = firstReverse;

    while(secondReverseInput>0){
        let digit = secondReverseInput%10;
        secondReverse = secondReverse*10+digit;
        secondReverseInput = parseInt(secondReverseInput/10);
    }
    console.log(secondReverse)
    if(num == secondReverse){
        return true;
    }
    else{
        return false;
    }
};

console.log(isSameAfterReversals(526))