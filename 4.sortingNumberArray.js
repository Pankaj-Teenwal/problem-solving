/**
 * @description
 * Q: Sorting of a number array with or without inbuilt methods.
 * step:1 we will have two nested loops.
 * step:2 in second loop we compare current element to the next element, if the first element is grater then next element then we simply swap the values of the element.
 * 
 * 
 */

function sortArray(arr){

    for(let i=0;i<arr.length;i++)
    {
        for(let j=0; j<arr.length;j++)
        {
            if(arr[j]>arr[j+1]){
                let tamp = arr[j];

                arr[j] = arr[j+1];

                arr[j+1] = tamp;
            }
        }
    }

    return arr;
}


let arr = [10,1,7,6,14,9,20,58,63,254,45,63];

console.log(sortArray(arr));