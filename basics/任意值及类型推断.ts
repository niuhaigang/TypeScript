// 如果是一个普通类型，在赋值过程中改变类型是不被允许的：
// let myFavoriteNumber: string = 'seven';
// myFavoriteNumber = 7;
//  任意值.ts:2:1 - error TS2322: Type '7' is not assignable to type 'string'. myFavoriteNumber = 7;

// 但如果是 any 类型，则允许被赋值为任意类型。
// let myFavoriteNumber: any = 'eight';
// myFavoriteNumber = 8;


/* 任意值的属性和方法 */
// 在任意值上访问任何属性都是允许的：
// let anyThing: any = 'hello';
// console.log(anyThing.myName);
// console.log(anyThing.myName.firstName);

// 也允许调用任何方法：
let anyThing: any = 'Tom';
anyThing.setName('Jerry');
anyThing.setName('Jerry').sayHello();
anyThing.myName.setFirstName('Cat');
// 声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值。


/* 未申明变量类型 */
// 变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型：
// let something;
// something = 'seven';
// something = 7;
// something.setName('Tom');
// 等价于
// let something: any;
// something = 'seven';
// something = 7;
// something.setName('Tom');


/* 类型推断 */ 
// 以下代码虽然没有指定类型，但是会在编译的时候报错：
// let myFavoriteNumber = 'seven';
// myFavoriteNumber = 7;
// index.ts(2,1): error TS2322: Type 'number' is not assignable to type 'string'.
// 等价于
// let myFavoriteNumber: string = 'seven';
// myFavoriteNumber = 7;
// index.ts(2,1): error TS2322: Type 'number' is not assignable to type 'string'

// TypeScript 会在没有明确的指定类型的时候推测出一个类型，这就是类型推论

// 如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 any 类型而完全不被类型检查
let myFavoriteNumber;
myFavoriteNumber = 'seven';
myFavoriteNumber = 7;