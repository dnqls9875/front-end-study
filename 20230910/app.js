// ! "use strict";

// ! 자바스크립트 객체
// ! 빌트인 객체 (내장 객체) => 고정이다.
// ! 호스트 객체 => 자바스크립트가 실행하는 환경에 따라 다르다. 브라우저에서는 window객체, Node JS에서는 global 객체
// ! 사용자 정의 객체  => 개발자가 만드는 것.

// ! this
// ! this는 자기가 속한 객체를 가리킨다.

// ! this는 어디서 호출하는 지에 달라진다.

const user = {
  name: "동현",
  getName: function (nickName, age) {
    return {
      nickName,
      age,
      name: this.name,
    };
  },
};

const user2 = {
  name: "우빈",
  //   getName === 동현
};

// ! this의 값을 바꾸기 위한 메서드 3개 = apply, call, bind
// ! apply, call은 함수를 호출
// ! bind 함수를 호출하지 않는다.

// user2.getName = user.getName.apply(user2, ["우빈쓰", 29]);
// user2.getName = user.getName.call(user2, "우빈쓰", 29);
user2.getName = user.getName.bind(user2, "우빈쓰", 29);

console.log(user2.getName());

const obj = {
  name: "Object",
  // ES6 에서는 이렇게 생긴 형태만 메서드라고 부른다.
  met() {
    console.log(this);
  },

  //   일반적으로 사람들이 메서드라고 부른다.
  met: function () {
    console.log(this);
    function met2() {
      console.log(this); // 함수가 중첩되어있으면 window 객체를 가리킨다.
    }
    met2();
  },

  met: () => {
    console.log(this); // window
  },
};

// ! 일반 함수에서의 this는 전역객체가 나온다.
// ! 객체안의 메서드의 this는 자신이 속한 객체가 나온다.
// ! 메서드안의 중첩 함수가 있으면 this는 전역객체가 나온다.
// ! 화살표 함수에서의 this는 상위 스코프를 가리킨다.
// ! DOM 이벤트에서의 this는 이벤트를 건 대상을 가리킨다.

// ! 유사 배열
// ! length 프로퍼티를 가지면 유사배열이라고 부른다.
// ! 배열처럼 인덱스로 요소에 접근할 수 있어야 한다.
// ! NodeList, HTMLCollection

const li = document.querySelectorAll("li");
const li2 = document.getElementsByTagName("li");

console.log(li);
console.log(li2);

const li3 = Array.from(li2);
console.log(li3); // 배열

const nums = [1, 2, 3];
const nums2 = [4, 5, 6];

// console.log(nums.indexOf(3));

console.log(nums.concat(nums2));
