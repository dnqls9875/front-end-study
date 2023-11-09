// ! export 개수에 상관없다. 객체로 감싸져서 내보내진다.
// ! export default 는 파일에 하나만 존재해야 한다.

// export function addNumber(x, y) {
//   return x + y;
// }

function addNumber(x, y) {
  return x + y;
}

const getData = () => {
  return "data";
};

export { getData, addNumber };

// export default function getUserName(name) {
//   return name;
// }

function getUserName2(name) {
  return name;
}

export default getUserName2;
