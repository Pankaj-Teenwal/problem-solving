let arr1 = [1, 2, 3, 4, 5, 6, 7,4,5,6,45,65];
let arr2 = [9, 8, 7, 6, 5, 4, 3, 2, 1];

let obj1 = {};
let resultArr = [];



for (let i = 0; i < arr1.length; i++) {
    let key = arr1[i];
    if (obj1.hasOwnProperty(key)) {
        obj1[key] = [key] + 1;
    }
    else {

        for(let i=0; i<arr2.length;i++){
            if(obj1.hasOwnProperty(arr2[i])){
                resultArr.push(key)
            }
        }
        

    }
}

console.log({obj1});
console.log(obj2)

console.log(resultArr);