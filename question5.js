// 5. Create a function that recieves an array and return the sum of all the elements inside that array
function sumArrayElements(arr) {
    let sum = 0;
  
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
  
    return sum;
  }
  
  const myArray = [1, 2, 3, 4, 5];
  const result = sumArrayElements(myArray);
  
  console.log(result);