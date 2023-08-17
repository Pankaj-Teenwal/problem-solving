
function shift(arr) {
    for(let i=0;i<1;i++)
    {
        for(let j=0; j<arr.length;j++){
            if(arr[j]===1){
                let element = arr.splice(0,1);
                arr.push(element);
            
            }
            break;
        }
    }
    return arr;

}

let arr = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0]

console.log(shift(arr));