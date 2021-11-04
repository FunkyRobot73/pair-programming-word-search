const transpose = function(matrix) {
  // Put your solution here

const newMatrix = [];
for (let i = 0; i < matrix[0].length; i++) {
  let elementArray = [];
    for (let j = 0; j < matrix.length; j++) {
      //console.log(matrix[i][j]);
    elementArray.push(matrix[j][i]);
   }
   newMatrix.push(elementArray);
}

 return newMatrix

};

const printMatrix = (matrix) => {
  for (const row of matrix) {
      for (const el of row) {
          process.stdout.write(el + " ");
          
      }
      process.stdout.write('\n')
  }
}



printMatrix(transpose([
[1, 2, 3, 4],
[1, 2, 3, 4],
[1, 2, 3, 4],
[1, 2, 3, 4]
]));

console.log('----')

printMatrix(transpose([
[1, 2],
[3, 4],
[5, 6]
]));

console.log('----')

printMatrix(transpose([
[1, 2, 3, 4, 5, 6, 7]
]));