function alternatingSums(e) {
  event.preventDefault();
  let a = document.getElementById("arr2").value;
  a = JSON.parse(a);

  let res = [0, 0];

  for (let i = 0; i < a.length; i++) {
    if(i%2 === 0) {
        res[0] += a[i];
    } else {
        res[1] += a[i];
    }
  }

  document.getElementById("res2").innerHTML = res;
  console.log(res);
  return res;
}
