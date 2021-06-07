// interface Human {
//   name: string;
//   age: number;
// }

// 인터페이스가 아닌 타입 별칭으로도 정의 가능
type Human = {
  name: string;
  age: number;
};

const suhmin: Human = {
  name: "Min",
  age: 29,
};

// 타입 별칭 - 정의한 타입에 대해 나중에 쉽게 참고할 수 있게 이름을 부여하는 것
// 타입은 확장 불가능. 가능한 타입보다는 인터페이스를 사용해 필요할때마다 확장하는것을 추천

