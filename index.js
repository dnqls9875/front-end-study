// 본인 이름 확인하기.

var getInputName = prompt("당신의 이름은 무엇인가요 ?");
var myName = "우빈";

console.log(getInputName); // null => false

// getInputName 값이 없다면!
if (!getInputName) {
  alert("취소했습니다. 다시 시도해주세요");
}

if (myName === getInputName) {
  console.log("이름이 일치합니다.");
} else {
  console.log("이름이 일치하지 않습니다.");
}
