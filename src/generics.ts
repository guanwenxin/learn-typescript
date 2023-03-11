interface ILength {
    length: number;
}

// 1. 泛型约束
function add<T extends ILength>(p1: T, p2: T): number {
    console.log(p1.length + p2.length)
    return p1.length + p2.length
}

// 2. 默认类型
function add2<T extends ILength = string>(p1: T, p2: T): number {
    console.log(p1.length + p2.length)
    return p1.length + p2.length
}

add<string>('1', '1')