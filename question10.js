// Create a function that displays a patern like this:
//     * * * * *
//     * * * * *
//     * * * * *
//     * * * * *

function displayPattern(rows, cols) {
    for (let i = 0; i < rows; i++) {
      let row = '';
      for (let j = 0; j < cols; j++) {
        row += '* ';
      }
      console.log(row);
    }
  }
  displayPattern(5, 5);
  

 