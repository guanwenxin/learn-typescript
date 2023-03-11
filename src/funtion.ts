// 1. 函数类型注解
function typeFn(param: string): string {
    return '1'
}

const a = typeFn('1')

// 2. 函数的参数是函数
function typeFn1(fn: (p1: string) => string):void {
}
function typeFn2(fn: IFn):void {
}

typeFn1(typeFn)
typeFn2(typeFn)

// 3. 通过接口声明函数
interface IFn {
    (p1: string): string;
}