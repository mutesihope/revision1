// 6. Create a function that recieves an array and returns the greates value inside that array

function findGreatestValue(arr) {
    if (arr.length === 0) {

      return "Array is empty";
    }
  
    let greatestValue = arr[0]; 
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > greatestValue) {
        greatestValue = arr[i];
      }
    }
  
    return greatestValue;
  }
  
  const myArray = [12, 5, 27, 8, 16];
  const result = findGreatestValue(myArray);
  
  console.log(result); 