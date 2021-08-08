
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (matrix == null || matrix.length == 0) {
    return [];
  }

  let result = [];
  for (let i = 0; i < matrix.length; i++) {
    if (typeof matrix[i] != 'number') {
      let subMatrix=matrix[i];
      if(i%2>0){
        subMatrix = subMatrix.reverse();
      }
      for (let j = 0; j < subMatrix.length; j++) {
        result.push(matrix[i][j]);
      }
    } else {
      result.push(matrix[i]);
    }
  }

  return result;
}
