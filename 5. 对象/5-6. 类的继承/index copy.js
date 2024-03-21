function Animal(type, name, age, sex) {
  this.type = type;
  this.name = name;
  this.age = age;
  this.sex = sex;
}
Animal.prototype.print = function () {
  console.log(`【种类】：${this.type}`);
  console.log(`【名字】：${this.name}`);
  console.log(`【年龄】：${this.age}`);
  console.log(`【性别】：${this.sex}`);
};

function Dog(name, age, sex) {
  //借用父类的构造函数
  Animal.call(this, '犬类', name, age, sex);
}

Object.setPrototypeOf(Dog.prototype, Animal.prototype);

const d = new Dog('旺财', 3, '公');
d.print();
console.log(d);

function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, 'string');
  return 'symbol' == typeof i ? i : String(i);
}
function _toPrimitive(t, r) {
  if ('object' != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || 'default');
    if ('object' != typeof i) return i;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return ('string' === r ? String : Number)(t);
}
class Parent {
  constructor() {
    _defineProperty(this, 'p', 'parent');
    _defineProperty(this, 'hiP', () => {});
    this.age = 10;
  }
  sayParent() {}
  static hi() {}
}

class A {
  c = function () {
    console.log(this);
   return this;
  };
  d() {
    console.log(this);
    return this;
  }
  f = () => {
    console.log(this);
    return this;
  };
}

let a = new A();
let q = a.c();
let w = a.d();
let e = a.f();
// q === w
// true
// q === e
// true
// w===e
// true
//  q === w === e === a; true

// let g = a.c
// undefined
// let r = g()
// undefined
// r
// undefined

// let t = a.d
// undefined
// let y = t()
// undefined
// y
// undefined

// let u = a.f
// undefined
// let i = u()
// undefined
// i
// A {c: ƒ, f: ƒ}
// i === a 
// true

// let b = new A()
// undefined
// b === a
// false
// b === i
// false

// class B{
//   c = function(){
//     const obj = {
//       a : ()=>{
//         return this;
//        }
//     }
//     return obj;
//   }
// }

// let b = new B()

// let j = b.c();

// let k = j.a();
// undefined
// j
// {a: ƒ}
// k
// B {c: ƒ}
// ﻿


// class A{static a=1}
// undefined
// class B extends A{}
// B.a
// 1
// A.pr
// undefined
// A.prototype.a
// undefined
// B.prototype === A.prototype
// false
// B.__proto__ === A
// true
