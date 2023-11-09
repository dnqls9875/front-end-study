// ! import 불러올 때 사용.
// ! exprt  내보낼 때 사용.

// ! ESM (EcmaScript Module)
// ! 각각의 독립된 파일 스코프를 사용하게 된다.
// & 1,2번 많이 사용

// ? 1. 기본적인 형태.
// import { getData, addNumber } from "./utils.js";

// ? 2. 기본 export default
import getUserName2 from "./utils/index.js";

// ? 3. as로 식별자 이름 바꾸기.
// import { getData as 이름바꿈, addNumber } from "./utils/index.js";

// ? 4. * 모두 내보내기
// import * as 동현 from "./utils/index.js";

console.log(동현);
console.log(이름바꿈());
