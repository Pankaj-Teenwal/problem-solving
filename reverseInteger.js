
const reverseInteger = (num) => {

    if(num<minInt || num>maxInt){
        return 0
    }
    let isNegative = false;
    if (num < 0) {
        isNegative = true;
        num = -num;
    }

    let ans = 0;

    while (num > 0) {
        let digit = num % 10;
        ans = ans * 10 + digit;
        num = parseInt(num / 10)
    }
    if(ans<minInt || ans>maxInt){
        return 0
    }
    if (isNegative) {
        return -ans;
    }
    else {
        return ans;
    }
}

console.log(reverseInteger(-123))
