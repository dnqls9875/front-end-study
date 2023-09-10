const BALL_COUNT = 10;
const BALL_MIN_RADIUS = 20;
const BALL_DEFAULT_RADIUS = 10 + 1;

const colors = ["#D7D9C7", "#D99152", "#8C5535", "#592723", "#323123"];

function Ball(ballObj) {
  this.radius = ballObj.radius;
  this.color = ballObj.color;
  this.left = ballObj.left;
  this.top = ballObj.top;
}

// getRadius prototype 객채 생성
Ball.prototype.getRadius = function () {
  console.log(this.radius);
};

// getColor prototype 객채 생성
Ball.prototype.getColor = function () {
  console.log(this.color);
};

// creatElem prototype 객채 생성
// document.createElement('생성할 요소')
Ball.prototype.creatElem = function () {
  const div = document.createElement("div");
  return div;
};

// ballStyle prototype 객채 생성
// 요소.classList.add('추가할 class')
Ball.prototype.ballStyle = function (div) {
  div.classList.add("ball");
  div.style.width = `${this.radius * 2}px`;
  div.style.height = `${this.radius * 2}px`;
  div.style.left = `${this.left * 2}px`;
  div.style.top = `${this.top * 2}px`;
  div.style.backgroundColor = this.color;
};

// play prototype 객채 생성
Ball.prototype.play = function () {
  const div = this.creatElem();
  this.ballStyle(div);
  document.body.appendChild(div);
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
