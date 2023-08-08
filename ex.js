/**
 * 
 * Q. remove all duplicate elements form string;
 */
function removeDuplicate(arr){
    arr.toLowerCase();
    arr= arr.split("");
    let result = '';

    for(let i=0; i<arr.length;i++)
    {
        let duplicate = false;

        for(let j=0; j<result.length;j++)
        {
            if(arr[i]===result[j])
            {
                duplicate= true;
                break;
            }
        }

        if(!duplicate){
            result+=arr[i];
        }
    }
    return result;
}



let str = "Programming";

console.log(removeDuplicate(str));