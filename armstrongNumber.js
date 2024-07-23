const checkArmstrong = (num)=>{
    let cpy = num;
    num = ""+num;
    let length = num.length;

    let result = 0;

    for(let i=0; i<num.length;i++){

        result = result+(num[i]**length)
    }

    return(result==cpy)
}

console.log(checkArmstrong(103))