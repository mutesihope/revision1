function cross(row){
    for(i=0; i<=row; i++){
        var x = " ";
        for(j=row; j>=0; j--){
            if(i===j){
                x = x + " 1"
            }
            else{
                x = x + " "
            }
        }
        console.log(x);
    }
}
cross(5);