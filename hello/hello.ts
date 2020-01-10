function sayHello(person: string) {
    return 'Hello, ' + person;
}

let user = 'Tom';
console.log(sayHello(user));

// 报错Argument of type 'number[]' is not assignable to parameter of type 'string'.
// 13 console.log(sayHello(user));
// ~~~~Found 1 error.
// function sayHello(person: string) {
//    return 'Hello, ' + person;
// }
// let user = [0, 1, 2];
// console.log(sayHello(user));
