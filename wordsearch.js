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
  

const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    //console.log(verticalJoin);
    if (horizontalJoin.includes(word)) return true 
   const transpose1 = transpose(letters)
   //console.log(transpose1);
    const verticalJoin = transpose1.map(ls => ls.join(''))
    if (verticalJoin.includes(word)) return true
    
    // put transpose function below
   return false 
}

module.exports = wordSearch
