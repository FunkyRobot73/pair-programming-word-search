const {transpose} = require("./transpose")

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
