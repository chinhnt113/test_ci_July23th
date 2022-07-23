function adjacentElementsProduct(e) {
  event.preventDefault();
  let inputArray = document.getElementById("arr1").value;
  inputArray = JSON.parse(inputArray);

  if (inputArray.length === 1) {
    document.getElementById("res1").innerHTML = "Yêu cầu mảng có nhiều hơn 1 phần tử.";
    return 0;
  }

  let res = inputArray[0] * inputArray[1];
  let res_pos = 0;
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] * inputArray[i + 1] > res) {
      res = inputArray[i] * inputArray[i + 1];
      res_pos = i;
    }
  }

  document.getElementById("res1").innerHTML = `Kết quả cần tìm là ${res}, là tích của ${inputArray[res_pos]} và ${
    inputArray[res_pos + 1]
  }`
  return res;
}
