interface User {
  age: number;
  name: string;
}

// 변수에 인터페이스 활용
const min: User = {
  age: 29,
  name: "MinGee",
};

// 함수에 인터페이스 활용
const getUser = (user: User) => {
  console.log(user);
};

getUser(min);

// 함수의 스펙(구조)에 인터페이스 활용
interface SumFunction {
  (a: number, b: number): number;
}

// 함수의 스펙에 인터페이스 활용
let sum: SumFunction;
sum = (a: number, b: number): number => a + b;

// 배열의 인덱싱 타이핑

interface StringArray {
  [index: number]: string;
}

const arr: StringArray = ["a", "b", "c"];
arr[0]; // 'a'

interface StringRegexDictionary {
  [key: string]: RegExp;
}

const obj: StringRegexDictionary = {
  sth: /abc/,
  cssFile: /\.css$/,
  jsFile: /\.js$/,
};

obj["cssFile"] = /css/;

// 인터페이스 확장

interface Person {
  name: string;
  age: number;
}

interface Developer extends Person {
  language: string;
}

const mingee: Developer = {
  language: "ts",
  age: 100,
  name: "민기",
};
