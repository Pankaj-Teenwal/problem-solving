arr = [1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1];

for(let i=0 ; i<arr.length; i++)
{
    
    if(arr[i]===1){
        let element = arr.splice(i,i+1);
        arr.push(element);
    }

}
console.log(arr);

console.log(0-1);