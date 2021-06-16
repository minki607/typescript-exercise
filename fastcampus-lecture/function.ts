function add(x: number, y: number): number {
    return x + y;
}

const result = add(1, 2);

function buildUserInfo(name?: string, email?: string) {
    return { name, email }
}

const user = buildUserInfo();
const add2 = (a: number, b: number): number => a + b;

interface Storage {
    product: string;
}

interface ColdStorage {
    coldProduct: string;
}   

function store(type: "통조림"): Storage
function store(type: "아이스크립"): ColdStorage


function store(type: "통조림" | "아이스크림") {
    if (type ==='통조림') {
        return { product: "통조림" }
    } else if (type ==='아이스크림') {
        return {coldProduct: '아이스크림' }
    } else {
        throw new Error('unsupported type')
    }
}