// 함수 파라미터에 타입을 정의 - 함수 반환값은 생략가능 (타입 추론)
const sum = (a: number, b: number) => {
  return a + b;
};

// 함수 반환 값에 타입을 정의 (return 해주지 않을시 오류)
const add = (): number => {
  return 10;
};

sum(10, 20);

// 함수 옵셔널 파라미터(?)

const log = (a: string, b?: string) => {};

log("hello min");
log("hello", "min");
