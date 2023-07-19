/**
 * @description
 * Q. find longest word from a string
 * "My name is ankit jain & i'm from morena"
 * 
 * 1. first we change this string to array of string.
 * 2. we simply create a max length and longestElement variable.
 * 3. Then inerate the array to it's length.
 * 4. Then campare each elements length to max length
 * 5. if it's greateer then max length then simply store that's elements length to max length and stor the element to longestElement.
 * 6. Once you iterate all the element simply return the longestElement.
 * 
 * 
 */


const longestWord = (input)=>{

    let str = input.split(" "); //creating array of string 

    let maxLength = 0;
    let longestWord;

    for(let i=0; i<str.length;i++)
    {
        if(str[i].length>maxLength){
            maxLength = str[i].length;
            longestWord= str[i];
        }
    }
   
    return longestWord;
}


let input = "My name is ankit jain & i'm from morena pankaj";

console.log(longestWord(input));