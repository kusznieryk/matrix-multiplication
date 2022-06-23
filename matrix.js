import * as rl from 'readline-sync'
export class Matrix {
  constructor(rows, columns) {
    this.rows = rows;
    this.columns = columns;
    this.matrix = []
    this.readMatrix()
  }

  readMatrix() {
    for (let i = 0; i < this.rows; i++) {
      let numbers = rl.question("Enter the numbers of row " + i + ": ");
      this.matrix.push(numbers.split(",").map((e) => Number(e)));
    }
  }
}


export function generateNullMatrix(rows, columns) {
  let aux = []
  for (let i = 0; i < rows; i++) {
    let aux2 = []
    for (let j = 0; j < columns; j++) {
      aux2.push(0)
    }
    aux.push(aux2)
  }
  aux.forEach(e => console.log(e))
  return aux
}
