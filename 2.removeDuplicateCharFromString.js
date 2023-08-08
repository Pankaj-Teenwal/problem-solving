/**
 * @description 
 * Q. Remove Duplicate Characters from a string.
 * step:1 Change the given string to array of characters.
 * step:2 create a empty string called result.
 * step:3 create a for loop for accessing all elements of the array.
 * step:4 create a duplicate variable for checking that the elements in array and result array is duplicate or not;
 * step:5 if the element of arr and result matches then mark duplicate as true; and break the loop;
 * step:6 then check if the elements are not duplicate then array element to the result element
 * 
 */

function removeDuplicate(str){

    str = str.split("");
    let result = '';
    for(let i=0; i<str.length;i++)
    {
        let duplicate =false;
        for(let j=0; j<result.length;j++){
            if(str[i]===result[j]){
                duplicate = true;
                break;
            }
        }

        if(!duplicate){
            result+=str[i];
        }

    }

    return result;
}

let string = "pankaj15573696";

console.log(removeDuplicate(string));