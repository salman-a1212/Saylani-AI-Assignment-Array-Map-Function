let m1 = document.getElementsByName("array[[],[],[]]");
console.log("m1", m1);

let m4 = 0;

m1.map((eachRow, i) => {
  eachRow.map((eachRowItem) => {
    // console.log("eachRowItem: ", eachRowItem);
    m4 = m4 + eachRowItem;
  });
});

// assigmernt: make a program to add two 3x3 matrix
let m2 = document.getElementsByName("array[[],[],[]]");
let m3 = 0;

m2.map((eachRow, i) => {
  eachRow.map((eachRowItem) => {
    // console.log("eachRowItem: ", eachRowItem);
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

var input = document.getElementsByName("array[]");
