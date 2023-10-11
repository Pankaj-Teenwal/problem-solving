/**
 * 
 * @description Q. removing duplicate characters from string
 * 
 * 1. taking a empty array.
 * 2.running a loop checking wether the element exist in array if not then push it to array
 * 3.else go to next iteration
 */

const removeDuplicate=(str)=>{
    let mapping ={};
    let result ="";
    for(let i=0; i<str.length;i++){
        const key = str[i];
        // if(mapping.hasOwnProperty(key)){
        //     mapping[key] = mapping[key]+1;
        // }
        // else{
        //     mapping[key] =1;
        //     result = result+key;
        // }
           
        mapping.hasOwnProperty(key)? mapping[key] = mapping[key]+1 : mapping[key] =1; result = result+mapping[key];


    }
    console.log("result: ", result);
    return mapping;

    
}

console.log(removeDuplicate("pankaj"));
/*
if(mapping.hasOwnProperty(key)){
            mapping[key] = mapping[key]+1;
        }
        mapping[key] =1;

*/