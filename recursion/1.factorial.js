const printReverse = (num)=>{

    const iteratenumber = (i)=>{
        console.log(i);
        if(i!==0){
            num--;
            iteratenumber(num);
        }
    }


    iteratenumber(num);
}





console.log(printReverse(10));