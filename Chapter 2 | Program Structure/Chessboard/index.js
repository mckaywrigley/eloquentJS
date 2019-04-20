let chessboard = "";

for (let y = 0; y < 8; y++) {
  for (let x = 0; x < 8; x++) {
    if (y % 2 === 0 || y === 0) {
      if (x % 2 === 0 || x === 0) {
        chessboard += "#";
      } else if (x % 2 !== 0) {
        chessboard += " ";
      }
    } else if (y % 2 !== 0) {
      if (x % 2 === 0 || x === 0) {
        chessboard += " ";
      } else if (x % 2 !== 0) {
        chessboard += "#";
      }
    }
  }
  chessboard += "\n";
}

console.log(chessboard);
