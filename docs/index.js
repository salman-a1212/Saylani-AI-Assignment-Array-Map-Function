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

// CSV function
input.oninput = function numberWithCommas() {
  let x = document.getElementById("input").value;
  console.log(x);
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
