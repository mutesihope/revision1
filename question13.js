function patern(row){
for(let i=0; i<row; i++){
    var z = " ";
    for( let j=0; j<row; j++){
        if(i===0 || i===row-1 ||j===0||j===row-1){
            z = z + " 1";
        }
        else{
            z = z + " 0";
        }
    }
    console.log(z);
}
}
patern(5);