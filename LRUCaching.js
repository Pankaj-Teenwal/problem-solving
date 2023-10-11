/**
 * 
 * 
 * Creating getFunction:-
 * 
 * 1. we create a new map and add key and values in that.
 * 2. then we create getFunc and pass key as argument.
 * 3. then we check if the key is avaliable in the map or not.
 * 4.if yes then we simply delete that entry, and create a new entry, so that entry will be on the top.
 * 
 * 
 * create putFunc:-
 * 
 * 1.when we pass the key and value to the function, then we check that the key is avaliable in map if yes then we simply simply delete that entriy and set the new value so that the entrie will be on top.
 * 
 *  
 */



let size = 2;
let dataStructure = new Map();
dataStructure.set(1, 1);
dataStructure.set(2, 2);

const getFunc = (key) => {
    if (dataStructure.has(key)) {
        dataStructure.delete(key)
        dataStructure.set(key, key)
        return key
    }
    else {
        return null;
    }
}


console.log(getFunc(1))

console.log("data structure after get func", dataStructure)

const putFunc = (key, val)=>{
    let result = key
    if(dataStructure.has(key)){
        dataStructure.delete(key);
        dataStructure.set(result, val);
        return key;
    }
    else{
        dataStructure.set(key, val)
    }
    if(dataStructure.size!== size){
        let laseElement = dataStructure.entries().next(0).value;
        laseElement = laseElement[0];

        dataStructure.delete(laseElement)
    }
}

putFunc(5,5);
console.log("Data Structure after putFunc", dataStructure)

const lastElement = dataStructure.entries().next(0).value

// const putFunc = (key, val)=>{
//     let result = key;

//     if(dataStructure.has(key)){
//         dataStructure.delete(key)
//         dataStructure.set(result, val)
//         return null;
//     }
//     else{
//         dataStructure.set(result, val)
//     }

//     if(dataStructure.size == size){
//         let getLastKeyInMap = (dataStructure) => [...dataStructure][dataStructure.size-1][0]


//     }
    
// }
