const Stack = require("./stack");

function reverseStr(str) {
  let forwardStr = new Stack();
  let reverseStr = "";
  for (let letter of str) {
    forwardStr.push(letter);
  }
  while (!forwardStr.isEmpty()) {
    reverseStr += forwardStr.pop();
  }
  return reverseStr;
}

reverseStr("Hello World");