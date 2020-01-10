/* 布尔值 */
var isDone = false;
// 编译通过
// 后面约定，未强调编译错误的代码片段，默认为编译通过
// let createdByNewBoolean: boolean = new Boolean(1);
// Type 'Boolean' is not assignable to type 'boolean'.
//   'boolean' is a primitive, but 'Boolean' is a wrapper object. Prefer using 'boolean' when possible.
var createdByBoolean = Boolean(1);
/* 数值 */
var decLiteral = 6;
var hexLiteral = 0xf00d;
// ES6 中的二进制表示法
var binaryLiteral = 10;
// ES6 中的八进制表示法
var octalLiteral = 484;
var notANumber = NaN;
var infinityNumber = Infinity;
/* 字符串 */
var myName = 'Tom';
var myAge = 25;
// 模板字符串
var sentence = "Hello, my name is " + myName + ".\nI'll be " + (myAge + 1) + " years old next month.";
/* 空值 */
function alertName() {
    alert('My name is Tom');
}
var unusable = undefined;
/* Null 和 Undefined */
var u = undefined;
var n = null;
// 与 void 的区别是，undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 number 类型的变量：
// 这样不会报错
var num = undefined;
// 这样也不会报错
var u1;
var num1 = u;
// 而 void 类型的变量不能赋值给 number 类型的变量：
// let u: void;
// let num: number = u;
// Type 'void' is not assignable to type 'number'.
