/* 布尔值 */

let isDone: boolean = false;
// 编译通过
// 后面约定，未强调编译错误的代码片段，默认为编译通过

// let createdByNewBoolean: boolean = new Boolean(1);

// Type 'Boolean' is not assignable to type 'boolean'.
//   'boolean' is a primitive, but 'Boolean' is a wrapper object. Prefer using 'boolean' when possible.

let createdByBoolean: boolean = Boolean(1);


/* 数值 */ 

let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
// ES6 中的二进制表示法
let binaryLiteral: number = 0b1010;
// ES6 中的八进制表示法
let octalLiteral: number = 0o744;
let notANumber: number = NaN;
let infinityNumber: number = Infinity;


/* 字符串 */ 

let myName: string =  'Tom';
let myAge: number = 25;

// 模板字符串
let sentence: string = `Hello, my name is ${myName}.
I'll be ${myAge + 1} years old next month.`;


/* 空值 */

function alertName(): void {
    alert('My name is Tom');
}
let unusable: void = undefined;


/* Null 和 Undefined */

let u: undefined = undefined;
let n: null = null;

// 与 void 的区别是，undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 number 类型的变量：
// 这样不会报错
let num: number = undefined;
// 这样也不会报错
let u1: undefined;
let num1: number = u;

// 而 void 类型的变量不能赋值给 number 类型的变量：
// let u: void;
// let num: number = u;

// Type 'void' is not assignable to type 'number'.
