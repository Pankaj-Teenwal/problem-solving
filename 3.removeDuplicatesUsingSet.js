/**
 * 
 * Q. Remove Duplicate characters from array of element and find the count of an elements using set.
 * 1: we are removing the duplicate array elements using set, set automatically removes all the duplicate values.
 * syntex of creating set:-  let set = new Set();
 * 2: once we have all the elements in the set then we simply return the size of the set.
 * 
 */

function removeDuplicates(arr){
    let set = new Set(arr);
    count =set.size;
    return {set, count};
}



let arr = ['a','b','c','d','e','a','b','r','e','p','w','t','o','a'];

console.log(removeDuplicates(arr));