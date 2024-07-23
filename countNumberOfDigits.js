const countNumberOfDigit = (num)=>{
    let result =0;
    while(num>0){
        num%10;
        result++;
        num = Math.floor(num/10);
    }
    return result
}

console.log(countNumberOfDigit(123))