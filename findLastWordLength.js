let inputArray =
    "a ";
const findLastWordLength = (inputArray) => {

    let wordLength = 0;
    let flag = false;
    inputArray = inputArray.split("")
    console.log("inputArray", inputArray)

    if (inputArray.length == 1 && inputArray != " ") {
        return 1
    }

    for (let i = inputArray.length - 1; i >= 0; i--) {
        if (inputArray[i] == " ") {
            if (flag) {
                return wordLength;
            }
            continue;
        }
        else{
            wordLength++
            flag = true;
        }
    }
}

console.log(findLastWordLength(inputArray))