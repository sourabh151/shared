function peak(isWater) {
  let i, j, min;
  for (i = 0; i < isWater.length; i++) {
    for (j = 0; j < isWater[0].length; j++) {
      isWater[i][j] = isWater[i][j] === 1 ? 0 : -1;
    }
  }
  for (i = 0; i < isWater.length; i++) {
    for (j = 0; j < isWater[0].length; j++) {
      if (isWater[i][j] === -1) {
        if (((j - 1) >= 0 && isWater[i][j - 1] === 0) ||
          ((j + 1) < isWater[0].length && isWater[i][j + 1] === 0) ||
          ((i - 1) >= 0 && isWater[i - 1][j] === 0) ||
          ((i + 1) < isWater.length && isWater[i + 1][j] === 0)
        ) {
          isWater[i][j] = 1;
        }
      }
    }
  }
  for (i = 0; i < isWater.length; i++) {
    for (j = 0; j < isWater[0].length; j++) {
      if (isWater[i][j] === -1) {
        min = 1;
        if ((j - 1) >= 0 && isWater[i][j-1] != -1) {
          min = Math.min(min, isWater[i][j - 1]);
        }
        if ((j + 1) < isWater[0].length && isWater[i][j+1] != -1) {
          min = Math.min(min, isWater[i][j + 1]);
        }
        if ((i - 1) >= 0 && isWater[i-1][j] != -1) {
          min = Math.min(min, isWater[i - 1][j]);
        }
        if ((i + 1) < isWater.length && isWater[i+1][j] != -1) {
          min = Math.min(min, isWater[i + 1][j]);
        }
        isWater[i][j] = min + 1;
      }
    }
  }
  return isWater;
}
console.log(peak([[0,0,1],[1,0,0],[0,0,0]]))
//leetcode done
