const BALL_COUNT = 50;
const BALL_DEFAULT_RADIUS = 11;
const BALL_MIN_RADIUS = 20;

const colors = [
  "#D7D9C7",
  "#D99152",
  "#8C5535",
  "#592723",
  "#323123",
  "#cdcd21",
];

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
  div.style.left = `${this.left}px`;
  div.style.top = `${this.top}px`;
  div.style.backgroundColor = this.color;
};

Ball.prototype.creatElem = function () {
  const div = document.createElement("div");
  return div;
};

Ball.prototype.play = function () {
  const div = this.creatElem();
  this.ballStyle(div);
  document.body.appendChild(div);
};

const randomNumber = (value) => Math.floor(Math.random() * value);

for (i = 0; i < BALL_COUNT; i++) {
  const radius = randomNumber(BALL_DEFAULT_RADIUS) + BALL_DEFAULT_RADIUS;
  const colorIndex = randomNumber(colors.length);
  const color = colors[colorIndex];
  const left = randomNumber(innerWidth);
  const top = randomNumber(innerHeight);

  const ballObj = {
    radius,
    color,
    left,
    top,
  };
  new Ball(ballObj).play();
}
