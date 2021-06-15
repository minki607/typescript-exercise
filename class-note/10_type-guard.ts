interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

const introduce = (): Developer | Person => {
    return {name: 'Min', age: 29, skill: 'typescript'}
}

const min = introduce();
console.log(min.name);

const isDeveloper = (target: Developer | Person): target is Developer => {
    return (target as Developer).skill !== undefined;
}
 
if (isDeveloper(min)) {
    console.log(min.skill)
} else {
    console.log(min.age)
}