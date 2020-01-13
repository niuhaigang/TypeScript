/* 简单例子 */
// 接口一般首字母大写
// interface Person {
//     name: string;
//     age: number;
// }
// let tom: Person = {
//     name: 'Tom',
//     age: 25
// }

// 定义的变量比接口少了一些属性是不允许的：
// interface Person {
//     name: string;
//     age: number;
// }

// let tom: Person = {
//     name: 'Tom'
// };
// index.ts(6,5): error TS2322: Type '{ name: string; }' is not assignable to type 'Person'.
//   Property 'age' is missing in type '{ name: string; }'.

// 多一些属性也是不允许的：
// interface Person {
//     name: string;
//     age: number;
// }

// let tom: Person = {
//     name: 'Tom',
//     age: 25,
//     gender: 'male'
// };
// index.ts(9,5): error TS2322: Type '{ name: string; age: number; gender: string; }' is not assignable to type 'Person'.
//   Object literal may only specify known properties, and 'gender' does not exist in type 'Person'.
// 赋值的时候，变量的形状必须和接口的形状保持一致

/* 可选属性 */
// 有时我们希望不要完全匹配一个形状，那么可以用可选属性：
// interface Person {
//     name: string;
//     age?: number;
// }

// let tom: Person = {
//     name: 'Tom'
// };
// interface Person {
//     name: string;
//     age?: number;
// }

// let tom: Person = {
//     name: 'Tom',
//     age: 25
// };

// 可选属性的含义是该属性可以不存在。
// 这时仍然不允许添加未定义的属性：
// interface Person {
//     name: string;
//     age?: number;
// }

// let tom: Person = {
//     name: 'Tom',
//     age: 25,
//     gender: 'male'
// };
// examples/playground/index.ts(9,5): error TS2322: Type '{ name: string; age: number; gender: string; }' is not assignable to type 'Person'.
//   Object literal may only specify known properties, and 'gender' does not exist in type 'Person'.

/* 任意属性 */
// 有时候我们希望一个接口允许有任意的属性
// interface Person {
//     name: string;
//     age?: number;
//     [propName: string]: any;
// }

// let tom: Person = {
//     name: 'Tom',
//     gender: 'male'
// };
// 使用 [propName: string] 定义了任意属性取 string 类型的值。

// 需要注意的是，一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集：
// interface Person {
//     name: string;
//     age?: number;
//     [propName: string]: string;
// }

// let tom: Person = {
//     name: 'Tom',
//     age: 25,
//     gender: 'male'
// };

// index.ts(3,5): error TS2411: Property 'age' of type 'number' is not assignable to string index type 'string'.
// index.ts(7,5): error TS2322: Type '{ [x: string]: string | number; name: string; age: number; gender: string; }' is not assignable to type 'Person'.
//   Index signatures are incompatible.
//     Type 'string | number' is not assignable to type 'string'.
//       Type 'number' is not assignable to type 'string'.
// 上例中，任意属性的值允许是 string，但是可选属性 age 的值却是 number，number 不是 string 的子属性，所以报错了。
// 另外，在报错信息中可以看出，此时 { name: 'Tom', age: 25, gender: 'male' } 的类型被推断成了 { [x: string]: string | number; name: string; age: number; gender: string; }，这是联合类型和接口的结合。

/* 只读属性 */
// interface Person {
//     readonly id: number;
//     name: string;
//     age?: number;
//     [propName: string]: any;
// }

// let tom: Person = {
//     id: 89757,
//     name: 'Tom',
//     gender: 'male'
// };

// tom.id = 9527;
// index.ts(14,5): error TS2540: Cannot assign to 'id' because it is a constant or a read-only property.
// 上例中，使用 readonly 定义的属性 id 初始化后，又被赋值了，所以报错了

// 注意，只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候：
// interface Person {
//     readonly id: number;
//     name: string;
//     age?: number;
//     [propName: string]: any;
// }

// let tom: Person = {
//     name: 'Tom',
//     gender: 'male'
// };

// tom.id = 89757;

// index.ts(8,5): error TS2322: Type '{ name: string; gender: string; }' is not assignable to type 'Person'.
//   Property 'id' is missing in type '{ name: string; gender: string; }'.
// index.ts(13,5): error TS2540: Cannot assign to 'id' because it is a constant or a read-only property.