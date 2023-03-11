// 1.对象类型声明
interface IUser {
    readonly name: number,
    age?: number // 可选属性
}

const obj: IUser = {
    name: 1,
    age: 2
}

const obj2: IUser = {
    name: 1
}

// 2. key value 类型的对象如何声明？
interface IConfig {
    // 和key单独声明混合使用时，需要是下面声明的子集
    [key: string]: string
}
const config: IConfig = {
    id: '123',
    sid: '12345',
}