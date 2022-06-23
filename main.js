import { Matrix, generateNullMatrix } from "./matrix.js";
import * as rl from "readline-sync";
function end() {
  process.exit();
}

let row = rl.questionInt("Number of rowsof the matrix: ");
let columns = rl.questionInt("Number of columns of the matrix: ");
const matrix1 = new Matrix(row, columns);

row = rl.questionInt("Number of rows of the matrix: ");
columns = rl.questionInt("Number of columns of the matrix: ");
const matrix2 = new Matrix(row, columns);


function product(m1, m2) {
  if (m1.columns == m2.rows) {
    let aux = generateNullMatrix(m1.rows, m2.columns);
    for (let i = 0; i < m1.rows; i++) {
      for (let j = 0; j < m2.columns; j++) {
        for (let k = 0; k < m1.columns; k++) {
          aux[i][j] += m1.matrix[i][k] * m2.matrix[k][j]
        }
      }
    }
    aux.forEach(e => console.log(e))
  }
  else console.log('Isn\'t possible to make that product')
}
product(matrix1, matrix2)

end();
