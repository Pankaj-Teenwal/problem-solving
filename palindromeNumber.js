const isPalindrome =(x)=>{

    if(x<0){
        return false;
    }
    let cpy = x;
    let palindrome = 0;
    while(x>0){
        let digit = x%10;
        palindrome = palindrome*10+digit;
        x = Math.floor(x/10)

    }

    return palindrome==cpy
}

console.log(isPalindrome(-13132))