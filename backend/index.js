const express = require('express');
const server = express();
server.set('views', path.join(__dirname, 'views'));

const userData = [
  { name: "Aadarsh", age: 21, hasDriverslicence: true },
  { name: "Mimoh", age: 21, hasDriverslicence: true },
  { name: "Kale", age: 18, hasDriverslicence: false },
]

// const names = ["An", 'Bn', 'Cn']
// const sumAllNames = names.reduce((acc, name) => acc + name, "");
// console.log(sumAllNames);

// const add = (value1, value2) => {
//   console.log(value1 + value2)
// }
// const subtract = (value1, value2) => {
//   console.log(value1 - value2)
// }

// const divide = (dividend, divisor) => {
//   return divisor === 0 ? 0 : dividend / divisor;
// }
// const division = (value1, value2) => value1 / value2;

// const sum = (...values) => {
//   return values.reduce((acc, value) => acc + value, 0);
// }


// console.log("aadarsh", sum(2, 3, 4, 5))

server.get('/:age', (request, response) => {
  const age = req.params.age;
  if (age >= 18) {
    response.send('You are an adult');
  } else if (age < 18) {
    response.send('You are a child');
  }
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
