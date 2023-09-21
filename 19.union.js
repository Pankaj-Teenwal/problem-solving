/**
 * 
 * @description Unique values only from 2 arrays i.e. union values
 * 
 * 
 */


const findUnion =(arr1, arr2)=>{
    
    let inputArr = [...arr1, ...arr2]
    console.log({inputArr})
    let result = {};

    for(let i=0; i<inputArr.length;i++)
    {
        const key = inputArr[i];
        if(result.hasOwnProperty(key)){
            result [key] = result[key]+1;
        }
        else{
            result[key] = 1;
        }
    }

    
    console.log(result)
    

    return Object.keys(result);
}

const inputA = [1, 2, 3, 4, 5, 1];
const inputB = [1, 2, 3, 4, 5, 1, 7, 6, 4, 3, 8];

console.log(findUnion(inputA, inputB))