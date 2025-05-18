# Concept Review

## HTTP Methods & HTTP Status Codes

**HTTP Methods** – Actions that can be performed on resources via HTTP:

- **GET**: Retrieve data from the server.

```js
fetch("https://api.example.com/users")
  .then((res) => res.json())
  .then((data) => console.log(data));
```

- **POST**: Submit data to be processed to the server.

```js
fetch("https://api.example.com/users", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name: "Alice" }),
});
```

- **PUT**: Update or replace existing data.

```js
fetch("https://api.example.com/users/1", {
  method: "PUT",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name: "Updated Alice" }),
});
```

- **DELETE**: Remove data from the server.

```js
fetch("https://api.example.com/users/1", {
  method: "DELETE",
});
```

**HTTP Status Codes** – Common codes returned from the server:

- **200 OK** – The request has succeeded.
- **404 Not Found** – The server cannot find the requested resource.
- **500 Internal Server Error** – The server encountered an unexpected condition.
- **403 Forbidden** – The server understands the request but refuses to authorize it.

```js
fetch("/some-endpoint").then((res) => {
  if (res.status === 200) {
    console.log("Success");
  } else if (res.status === 404) {
    console.log("Not Found");
  }
});
```

## CSS Selectors

```css
/* Element Selector */
p {
  color: blue;
}

/* Class Selector */
.card {
  padding: 10px;
}

/* ID Selector */
#header {
  background-color: black;
}

/* Attribute Selector */
input[type="text"] {
  border: 1px solid gray;
}
```

## GIT Basics

```bash
git init             # Initialize a repo
git add .            # Stage changes
git commit -m "msg"  # Commit with message
git push origin main # Push to remote repo
git pull origin main # Pull from remote
git clone URL        # Clone repo
git branch dev       # Create branch
git checkout dev     # Switch to branch
```

## Callback & Higher-Order Function

```js
// Callback function
function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Alice", sayBye);

// Higher-order function
function multiplier(factor) {
  return function (x) {
    return x * factor;
  };
}

const double = multiplier(2);
console.log(double(5)); // 10
```

## Array Methods

```js
const numbers = [1, 2, 3, 4, 5];

// filter
const evens = numbers.filter((n) => n % 2 === 0); // [2, 4]

// map
const squares = numbers.map((n) => n * n); // [1, 4, 9, 16, 25]

// forEach
numbers.forEach((n) => console.log(n)); // prints each number

// push
numbers.push(6); // [1, 2, 3, 4, 5, 6]

// pop
numbers.pop(); // [1, 2, 3, 4, 5]
```
