// 7. Create a function that recieves an array and returns the smallest number from that array

function findSmallestNumber(arr) {
    if (arr.length === 0) {
      return "Array is empty";
    }
  
    let smallestNumber = arr[0]; 
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < smallestNumber) {
        smallestNumber = arr[i];
      }
    }
  
    return smallestNumber;
  }
  
  const myArray = [12, 5, 27, 8, 16];
  const result = findSmallestNumber(myArray);
  
  console.log(result); 
  