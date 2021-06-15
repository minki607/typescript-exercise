interface Devleoper {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    skill: string;
}

let developer: Developer;
let person: Person;


developer = person;
person = developer;


let add = (a: number) => {
    // ...
}

let sum = (a: number, b: number) => {
    // ...
}


sum = add; 
add = sum; // sum은 add 보다 많은 매개변수를 받기때문에 호환이가능하지만 반대는 호환불가능

// 제네릭

interface Empty<T> {
    //...
}

let empty1: Empty<string>;
let empty2: Empty<number>;