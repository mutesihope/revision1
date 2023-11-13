// 9. Create a function that combines two arrays into one single array. 
function combineArrays(arrayOne, arrayTwo) {
    return [...arrayOne, ...arrayTwo];
  }
  
  const arrayOne = ['a', 'b', 'c', 'd'];
  const arrayTwo = ['e', 'f', 'g'];
  const combinedArray = combineArrays(arrayOne, arrayTwo);
  
  console.log(combinedArray); 
  