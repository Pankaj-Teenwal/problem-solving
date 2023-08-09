
function shift(arr) {

    for (let i = 0; i < arr.length / 2; i++) {
        let firstElem = arr[i];
        let lastElem = arr[arr.length - 1];

        if (arr[0] > arr[length - 1]) {

            let temp = arr[firstElem];
            arr[firstElem] = arr[lastElem];
            arr[lastElem] = temp;

        }
    }
    return arr;
}

let arr = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0]

console.log(shift(arr));