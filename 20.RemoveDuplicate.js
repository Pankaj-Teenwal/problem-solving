/**
 * 
 * @description Q. removing duplicate characters from string
 * 
 * 1. taking a empty array.
 * 2.running a loop checking wether the element exist in array if not then push it to array
 * 3.else go to next iteration
 */

const removeDuplicate=(str)=>{
    let result ={};
    for(let i=0; i<str.length;i++){
        const key = str[i];
        if(result.hasOwnProperty(key)){
            result[key] = result[key]+1;
        }
        result[key] =1;
    }
    return Object.keys(result);   
    


    
}

console.log(removeDuplicate("pankaj"))