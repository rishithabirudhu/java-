<!DOCTYPE html>
<html>
<head>
  <title>JavaScript Concepts Demo</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f0f0f0;
      padding: 20px;
    }
    h1 {
      text-align: center;
      color: #333;
    }
    .output {
      background: #fff;
      padding: 15px;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
      margin-top: 20px;
    }
    button {
      padding: 10px 20px;
      background-color: teal;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    button:hover {
      background-color: darkslategray;
    }
  </style>
</head>
<body>

<h1>JavaScript Concepts Demo</h1>
<button onclick="runDemo()">Run Demo</button>

<div class="output" id="output"></div>

<script>
function runDemo() {
    let out = "";

    // 1. Variables
    let name = "Alice";
    let age = 20;
    out += <b>Variables:</b> Name = ${name}, Age = ${age}<br><br>;

    // 2. Arrays
    let fruits = ["Apple", "Banana", "Mango"];
    out += <b>Arrays:</b> Fruits = ${fruits.join(", ")}<br><br>;

    // 3. Objects
    let person = {
        firstName: "John",
        lastName: "Doe",
        greet: function() {
            return Hello, my name is ${this.firstName} ${this.lastName};
        }
    };
    out += <b>Objects:</b> ${person.greet()}<br><br>;

    // 4. Functions
    function addNumbers(a, b) {
        return a + b;
    }
    out += <b>Functions:</b> 5 + 7 = ${addNumbers(5, 7)}<br><br>;

    // 5. Loops
    out += "<b>Loops:</b> Counting from 1 to 5: ";
    for (let i = 1; i <= 5; i++) {
        out += i + " ";
    }

    document.getElementById("output").innerHTML = out;
}
</script>

</body>
</html>
