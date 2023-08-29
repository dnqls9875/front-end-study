// ! 생성자 함수
// ! 객채를 만들 때 사용. =>
// ! 첫글자를 대문자로 사용하는 파스칼 케이스를 사용한다.
function Ball(color, radius) {
  // ^ 생성자 함수에서의 this 는 앞으로 생성될 인스턴스를 가리킨다.
  this.color = color;
  this.radius = radius;

  //  ^ 오버라이딩 (덮어썼다)
  this.getColor = function () {
    return this.color + "생성자 함수";
  };

  // ^ 정적 프로토타입
  Ball.name2 = "공";
  console.log(Ball.name2);

  // ^ 정적 메서드
  Ball.getName = function () {
    console.log(this.name2);
  };

  ball1.getName();

  //   ^ 프로토타입 섀도잉

  Ball.prototype.getColor = function () {
    return this.color;
  };
}

// 인스턴스
const ball1 = new Ball("red, 5");
const ball2 = new Ball("green, 15");
const ball3 = new Ball("blue, 20");

console.log(ball1.getColor());

const met = {
  // ES에서의 메서드의 정의는
  getName() {},
  // 일반적으로 객체안에 함수가 있으면 메서드라고 부른다.
  getName: function () {},
  getName: () => {},
};

// 함수형 프로그래밍 vs 객채지향 프로그래밍
// 함수형 프로그래밍은 부수효과 없어야한다. => 변하면 안된다 값이

// 객체지향 프로그래밍은 사람이 보는관점과 같다.

function foo() {
  let a = 10;
  return a + 10;
}

foo(a); //10

// ! 프로토타입이란?
// ! 어떤 객체의 상위 객채역할을 말한다.
