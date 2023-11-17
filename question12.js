function patern(row,col){
    for(i=0; i<row; i++){
        var y = " "
        for(j=row; j>0; j--){
            if(i<j){
            y = y+ " 1";
            }
            else{
                y = y+ " 0"
            }
        }
        console.log(y)
    }
}
patern(4);