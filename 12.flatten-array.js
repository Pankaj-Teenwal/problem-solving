/**
 * 
 * @description Q. Flatten Deeply Neasted Array
 * 
 * i/p:- [1, 2, 3, [4, 5, 6], [7, 8, [9, 10,[50,100], 11], 12], [13, 14, 15]]
 * o/p:- [1,  2,  3,  4,   5,  6,  7, 8,  9, 10, 50, 100, 11, 12, 13, 14, 15]
 * 
 * 
 * step:1 we create a function that take array as argument.
 * step:2 we itrate the array element and check wether the element is number or an array
 * step:3 if elemtn is number then we simply push that element in empty result array.
 * step:4 if element is array then we simply call that function itself and push all the element in the result array
 */



// var result = [];


const flatArr = (arr) => {
    var result =[]
    for (let i = 0; i < arr.length; i++)
        if (Array.isArray(arr[i])) {
            newArr = arr[i];
            flatArr(newArr);
        }
        else {
            result.push(arr[i]);
        }

    return result;
    
};

let arr = [1,2,3,4, [1,2], [3,4, [3,4]] , 5];

console.log("Flat arr", flatArr(arr));

