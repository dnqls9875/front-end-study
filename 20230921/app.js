// ! DOM (Document Object Model)
// ! HTML 문서의 계층적 구조와 정보를 표현하며 프로퍼티와 메서드를 제공하는 트리 자료구조다.

// console.log(document.getElementsByTagName("li"));

// const createArray = Array.from(document.getElementsByTagName("li"));
// console.log(createArray);

// ! 자식 노드 탐색
// console.log(document.querySelector("body")); xxxxx
console.log(document.body["children"]);

// ! 부모 노드 탐색
console.log(document.body.parentNode);
// document.querySelector("ul").parentNode.parentNode; //가능

// ! 노드 정보 취득
console.log(document.querySelector("ul").nodeName); // 태그 이름을 다 대문자로 알려준다.

// ! 요소노드의 텍스트 조작
document.querySelector("ul li:nth-of-type(2)").textContent = "에라이 조작";

// ! DOM 조작

// ? innerHTML, innerText
document.querySelector("ul li:first-of-type").innerText = "<h1>innerHTML</h1>";
// document.querySelector("ul li:first-of-type").innerHTML = "<h1>innerHTML</h1>";

// ? insertAdjacentHTMl, Text

document.body.insertAdjacentHTML("afterbegin", "<h1>hello world</h1>");

// ? appendChild
// ? 어떤요소 기준으로 마지막에 추가하는 메서드다.

// 요소.appendChild(추가할 요소)

const creatLi = document.createElement("li");
creatLi.textContent = "새로 만든 LI";

document.querySelector("ul").appendChild(creatLi);

// ! attribute 조작

document.body.setAttribute("class", "darkmode");

// ! attribute 값 가져오기
console.log(document.body.getAttribute("class")); // darkmode

// ! data attribute 값 가져오기
console.log(document.body.dataset.name); // 우빈

// ! 클래스 조작
const boxElem = document.querySelector(".box");
console.log(boxElem.className);

// ! 클래스 추가하기.

// ! 클래스 제거하기.

// ! 클래스가 있는지 확인하기.
console.log(boxElem.classList.contains("box-large"));
