// ! 생성자 함수 사용해서 ball을 만들어
// ! radius 프로퍼티 만들기
// ! 인스턴스

// ! 값이 바뀌지 않는거라면 대문자로 표기하고, 스네이크 케이스를 사용한다.
// ! 매직 넘버

const BALL_COUNT = 10;
const BALL_MIN_RADIUS = 20;
const BALL_DEFAULT_RADIUS = 10 + 1;

/**
 *  ! 배열
 *  ! 하나의 값에 여러개의 데이터가 저장되어있는게 배열이다. [완두콩]
 *  ! 배열은 객체다.
 *  ! 배열은 length 프로퍼티를 가진다. 배열의 길이(데이터의 개수) 를 말한다.
 *  ! 배열에 맨 처음에 인덱스 번호는 0부터 시작한다. 맨 마지막은 배열의 길이 -1
 *
 */

const colors = ["#D7D9C7", "#D99152", "#8C5535", "#592723", "#323123"];

function Ball(ballObj) {
  this.radius = ballObj.radius;
  this.color = ballObj.color;
  this.left = ballObj.left;
  this.top = ballObj.top;
}

Ball.prototype.getRadius = function () {
  console.log(this.radius);
};

Ball.prototype.getColor = function () {
  console.log(this.color);
};

Ball.prototype.ballStyle = function (div) {
  div.classList.add("ball");
  div.style.width = `${this.radius * 2}px`;
  div.style.height = `${this.radius * 2}px`;
  div.style.backgroundColor = this.color;
  div.style.left = `${this.left}px`;
  div.style.top = `${this.top}px`;
};

Ball.prototype.play = function () {
  const div = this.creatElem();
  this.ballStyle(div);
  document.body.appendChild(div);
};

Ball.prototype.creatElem = function () {
  const div = document.createElement("div");

  return div;
  /**
   * ! CSS 조작하기.
   * ! 요소.style.CSS속성명 = CSS속성값
   * ! CSS 속성명에 - 있으면 -를 지우고 바로 뒤에있는 글자를 대문자로 바꿔준다.
   */

  //   div.style["width"] = `${this.radius * 2}px`;
  //   div.style["height"] = `${this.radius * 2}px`;
  //   div.style["backgroundColor"] = this.color;

  /**
   * ! 속성 넣는 방법
   * ! 1. 요소.classList.add("추가할 클래스명")
   * ! 2. 요소.setAttribute("속성명", "속성값")
   */
};

const randomNumber = (value) => Math.floor(Math.random() * value);

for (let i = 0; i < BALL_COUNT; i++) {
  const radius = randomNumber(BALL_DEFAULT_RADIUS) + BALL_DEFAULT_RADIUS;
  const colorIndex = randomNumber(colors.length);
  const left = randomNumber(innerWidth);
  const top = randomNumber(innerHeight);
  const color = colors[colorIndex];

  const ballObj = {
    radius,
    color,
    left,
    top,
  };
  new Ball(ballObj).play();
}

console.log(window);

/**
 * ! window 객체.
 * ! window 객체는 전역객체이기 때문에 생략할 수 잇다.
 */

/**
 * ! ES6 객체
 * ! Short Hand
 * ! 객체의 프로퍼니와 값의 이름이 같다면 하나로 축약할 수 있다.
 */

/**
 * ! 자바스크립트 HTML,CSS 조작하기. => 추가, 삭제, 수정이 가능하다.
 * ! DOM 조작 => Document Object Model
 */

// console.log(window);

/**
 * ! document.createElement('태그이름')을 사용해서 요소 만들기.
 */

// const div = document.createElement("div");
// console.dir(div);

/**
 * ! 요소.appendChild(추가할 요소) 특정 요소 맨 뒤에 추가하는 방법
 */

// document.body.appendChild(div);
