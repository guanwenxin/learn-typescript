// 1.匿名对象
let noneNameObj: {
    name: string,
    age?: number,
    time: string,
}

// 当我们想让编译器跳过类型检查
// 并且心里清楚运行时数据的真正类型
const pjw1 = {
    name: 1
} as {
    name: number,
    age?: number,
    time?: string,
}

const pjw2: {
    name: number,
    age?: number,
    time?: string,
} = {
    name: 1
}

pjw1.time
pjw2.time