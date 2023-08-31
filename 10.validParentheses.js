/**
 * @description 
 * step-1 create a empty array then we simply push the the first elememt of the string.
 */





let str = '(([]){})';



let checkValidPranthesis = (str) => {

    if(str[0] === ']' || str[0] === '}' || str[0] === ')'){12
        return false;
    }
    let stack = [];
    for (let i = 0; i < str.length; i++) {

        if (stack[stack.length - 1] === '{' && str[i] === '}') {
            stack.pop();
        }
        else if (stack[stack.length - 1] === '[' && str[i] === ']') {
            stack.pop();
        }
        else if (stack[stack.length - 1] === '(' && str[i] === ')') {
            stack.pop();
        }
        else {
            stack.push(str[i]);
        }
    }



    if (stack.length === 0) {
        return true;
    }
    else {
        return false;
    }
}

console.log(checkValidPranthesis(str));