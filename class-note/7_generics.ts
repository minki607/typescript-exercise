/* ------------------- 제네릭 - 재사용성이 높은 컴포넌트를 만들때자주 활용하는 특징 ------------------- */

// const logText = (text) => {
//   console.log(text);
//   return text;
// };

const logText = <T>(text: T): T => {
  return text;
};

const str = logText<string>("abc");

logText(10); // 숫자 10
logText("하이"); // 문자열 하이
logText(true); // 진위값 true

// 제네릭 타입 제한

// const logTextLength = <T>(text: T[]): T[] => {
//   console.log(text.length);
//   text.forEach(() => console.log(text));
//   return text;
// };

// logTextLength<string>(["hi", "abc"]);

// 제네릭 타입 제한 2 - 정의된 타입 이용하기

interface LengthType {
  length: number;
}

// 내부 속성에 length가 있어야면 인자로 전달가능)
const logTextLength = <T extends LengthType>(text: T): T => {
  text.length;
  return text;
};

// 제니릭 타입 제한 3

interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}

const getItem = <T extends keyof ShoppingItem>(item: T): T => {
  return item;
};

getItem("name");
