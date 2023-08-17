/**
 * @description
 * Given an integer array nums and an integer k, return the kth largest element in the array.

Note that it is the kth largest element in the sorted order, not the kth distinct element.

Can you solve it without sorting?

 

Example 1:

Input: nums = [3,2,1,5,6,4], k = 2
Output: 5



setp 1: we will take a empty array and set all the element to undefined.
step 2: then we will take


 */

function findLargestElement(arr){
    let largestElement = arr[0];
    for(let i=0; i<arr.length; i++){
        if(largestElement<arr[i]){
            largestElement = arr[i];
        }
    }

    return largestElement;
    
}

const nthLargestElement = (arr, n)=>{
    let largestElem = findLargestElement(arr);
    console.log(largestElem);

    for(let i=0; i<arr.length;i++){
        let nthElement = largestElem - arr[i];
        if(nthElement === n){
            return nthElement;
        }
    }
    
}

let nums = [8,9,12,5,6,28];

console.log(nthLargestElement(nums,1));


