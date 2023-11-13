// 8. Create a function that recieves an array of numbers and return the average of the numbers
function calculateAverage(arr) {
    if (arr.length === 0) {
      return "Array is empty";
    }
  
    let sum = 0;
  
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
  
    const average = sum / arr.length;
  
    return average;
  }

  const myArray = [12, 5, 27, 8, 16];
  const result = calculateAverage(myArray);
  
  console.log(result); 
  