  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>Array Map(f) Matrix Addition</title>
  </head>
  <body>
    <div class="main">
      <h1>Matrix Addition</h1>
      <h3>Using Array Map Function</h3>
      <div class="app" id="app">
        <p id="text">Please open console to see the working code</p>
        <div class="result" id="result"></div>
      </div>
    </div>
    <script src="index.js"></script>
  </body>
</html>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+Mono:wght@100;200;300;400;500;600;700;800;900&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Noto Sans Mono", monospace;
}

.main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
}

#input {
  padding: 5px;
  font-size: 1rem;
}

.app {
  margin: 50px 0;
}

input:placeholder-shown {
  font-style: italic;
  background-color: rgb(232, 240, 254);
}
</style>

<script>
var input = document.getElementsByName("array[]");
let m1 = [
  [3, 4, 6],
  [5, 4, 6],
  [5, 3, 2],
];

let m4 = 0;

m1.map((eachRow, i) => {
  eachRow.map((eachRowItem) => {
    console.log("eachRowItem: ", eachRowItem);
    console.log("m1", m1);
    m4 = m4 + eachRowItem;
  });
});

// assignment: make a program to add two 3x3 matrix
let m2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let m3 = 0;

m2.map((eachRow, i) => {
  eachRow.map((eachRowItem) => {
    console.log("eachRowItem: ", eachRowItem);
    console.log("m2", m2);
    m3 = m3 + eachRowItem;
  });
});

console.log("m3", m3);
console.log("m4", m4);

let m5 = m3 + m4;
console.log("m5", m5);

let result = document.getElementById("result");
result.innerText = m5;
</script>
