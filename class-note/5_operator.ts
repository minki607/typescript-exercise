/* --------------- 유니언 타입. any를 사용하게 되면 타입핑의 장점이 없어짐으로 유니언 사용 --------------- */

const logMessage = (value: string | number) => {
  // any를 사용하지 않았기 때문에 toLocalString같은 숫자관련 메서드를 추천해줌
  if (typeof value === "number") value.toLocaleString();
  else if (typeof value === "string") value.toString();
  throw new TypeError("value must be string or numbers");
};

logMessage("hello");

interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

const askSomeone = (someone: Developer | Person) => {
  // 공통(보장)된 속성만 접근가능
  someone.name;
};

askSomeone({ name: "민기", skill: "타입스크립트" });

/* ---------------------------------- 인터섹션 ---------------------------------- */

// const askSomeone = (someone: Developer & Person) {
//   someone.name;
//   someone.skill
//   someone.age
// }
