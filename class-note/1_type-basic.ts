// 기본 타입

// 문자열 선언
const str: string = "hello";

// 숫자
const num: number = 10;

// 숫자로 이루어진 배열
const arr: Array<number> = [1, 2, 3];
// 또는
const items: number[] = [1, 2, 3];

// 문자로 이루어진 배열
const heroes: Array<string> = ["Min", "Won", "Suh"];

// TS 튜플 (각각의 인덱스에 타입이 지정되어 있는 배열)
const address: [string, number] = ["min", 29];

// TS 객체 (General)
const obj: object = {};
// 구체적으로 내부의 프로퍼티 키와 값까지 타입 지정
const person: { name: string; age: number } = {
  name: "Min",
  age: 29,
};

// TS 불리언
const show: boolean = true;
