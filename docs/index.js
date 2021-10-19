const sum = () => {
  let btn = document.getElementById("btn");
  let m1v1 = Number(document.getElementById("m1v1").value);
  let m1v2 = Number(document.getElementById("m1v2").value);
  let m1v3 = Number(document.getElementById("m1v3").value);
  let m1v4 = Number(document.getElementById("m1v4").value);
  let m1v5 = Number(document.getElementById("m1v5").value);
  let m1v6 = Number(document.getElementById("m1v6").value);
  let m1v7 = Number(document.getElementById("m1v7").value);
  let m1v8 = Number(document.getElementById("m1v8").value);
  let m1v9 = Number(document.getElementById("m1v9").value);

  let m2v1 = Number(document.getElementById("m2v1").value);
  let m2v2 = Number(document.getElementById("m2v2").value);
  let m2v3 = Number(document.getElementById("m2v3").value);
  let m2v4 = Number(document.getElementById("m2v4").value);
  let m2v5 = Number(document.getElementById("m2v5").value);
  let m2v6 = Number(document.getElementById("m2v6").value);
  let m2v7 = Number(document.getElementById("m2v7").value);
  let m2v8 = Number(document.getElementById("m2v8").value);
  let m2v9 = Number(document.getElementById("m2v9").value);

  let m1 = [
    [m1v1, m1v2, m1v3],
    [m1v4, m1v5, m1v6],
    [m1v7, m1v8, m1v9],
  ];
  let m2 = [
    [m2v1, m2v2, m2v3],
    [m2v4, m2v5, m2v6],
    [m2v7, m2v8, m2v9],
  ];
  let m3 = [[], [], []];

  for (let i = 0; i < m1.length; i++) {
    for (let j = 0; j < m2.length; j++) {
      m3[i][j] = m1[i][j] + m2[i][j];
    }
  }

  document.getElementById("m3v1").value = m3[0][0];
  document.getElementById("m3v2").value = m3[0][1];
  document.getElementById("m3v3").value = m3[0][2];
  document.getElementById("m3v4").value = m3[1][0];
  document.getElementById("m3v5").value = m3[1][1];
  document.getElementById("m3v6").value = m3[1][2];
  document.getElementById("m3v7").value = m3[2][0];
  document.getElementById("m3v8").value = m3[2][1];
  document.getElementById("m3v9").value = m3[2][2];
};

btn.addEventListener("click", sum);
