/**
 * @description
 * 
 * we have a array of 1's and 0's we have to shift 0's to the left side and 1's to the right side.
 * 
 * arr = [111000111100011100];
 * output = [00000000000011111111];
 * 
 * step: 1 we create the nested loop then we compare if the next element then we swap the elements accordingly.
 * 
 * outer loop is for number of step and inner loop is for swaping the values 
 */

function shift(arr){
        for(let i=0; i<arr.length;i++)   
        {
            for(let j=0; j<arr.length;j++) 
            {
                if(arr[j]>arr[j+1]){
                    let temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
            }
        }

        return arr;
}

let arr = [1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,0,0];

console.log(shift(arr));