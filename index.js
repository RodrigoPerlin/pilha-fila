/*
  () ==> true
  (([])) ==> true
  (() ==> false
  [] ==> true
  ([{]}) =false
  {}[]() ==> true
  {([)} == false
*/
const temp = "({[]})";

// console.log(temp.length % 2 === 0  ? "true" : "false");
function ckeck(expr) {
  let map = {
    ")": "(",
    "]": "[",
    "}": "{",
  };
  let stck = [];
  for (let i = 0; i < expr.length; i++) {

    if (expr[i] === "(" || expr[i] === "[" || expr[i] === "{") {
      stck.push(expr[i]);
    } else if (stck[stck.length - 1] === map[expr[i]]) {
      stck.pop();
    } else return false;
  }
  return stck.length ? false : true;
}

const tt = ckeck(temp);
console.log(tt);
==========
var fila = [];
fila.push(1);
fila.push(2);
fila.push(3);
console.log(fila);

fila.shift();

fila.push(4);
console.log(fila);

fila.shift();
fila.shift();
console.log(fila);


