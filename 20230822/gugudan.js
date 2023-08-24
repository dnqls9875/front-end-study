// 구구단 만들기
// for (var i = 2; i < 10; i++) {
//   for (var j = 1; j < 10; j++) {
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// }

var startElm = document.querySelector("input:first-of-type");
var endElm = document.querySelector("input:last-of-type");
var creatGugudanBtn = document.querySelector("button");

console.log(startElm, endElm);

// 구구단에 필요한 로직을 생성해주는 것.

function gugudan(min, max) {
  if (startElm.value === "" || endElm.value === "") {
    alert("단을 입력하세요");
    return;
  }

  var contents = "";
  for (var i = min; i <= max; i++) {
    contents += `<p>==== ${i} 단 시작 ==== </p>`;
    for (var j = 1; j <= 9; j++) {
      contents += `<p>${i} * ${j} = ${i * j}</p>`;
    }
  }
  return contents;
}

function gugudanPrint() {
  document.querySelector("div").innerHTML =
    gugudan(startElm.value, endElm.value) || "단을 입력해주세요 ❤";
  clearInput();
}

function clearInput() {
  startElm.value = "";
  endElm.value = "";
}

// creatGugudanBtn.addEventListener("click", function(){
//   gugudanPrint(startElm.value, endElm.value)
// )};

creatGugudanBtn.addEventListener("click", gugudanPrint);
