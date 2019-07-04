"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var isDone = false;
var createByNewBoolean = new Boolean(1);
var decLiteral = 6;
var noNumber = NaN;
var inifityNumber = Infinity;
var hexLiteral = 0xf00d;
var myName = 'gzf';
var myAge = 25;
var sentence = "Hello my name is " + myName;
var agestr = "I'll be " + (myAge + 1) + " years old";
function alertName() {
    //    alert('my name is fairy');
}
//null和undefined是所有类型的子类型;
var unuseable = undefined;
var u = undefined;
var n = null;
var numbers = undefined;
var us;
var num = us;
var myFavoriteNumber = 'seven';
myFavoriteNumber = 7;
//变量如果在声明的时候,未指定其类型,那么它会被识别为任意类型。
//如果定义的时候没有赋值,不管之后有没有赋值,都会被推断成any类型而完全不被
//类型检查。
var mys;
mys = 6;
mys = 'six';
function getLength(something) {
    return something.toString();
}
var tom = {
    id: 89757,
    name: 'gzf',
    gender: 'female'
};
//一旦定义了任意属性,那么确定属性和可选属性必须是它的类型的子集
//只读的约束存在于第一次给对象赋值的时候,而不是第一次给只读属性赋值的时候;
var fibonacci = [1, 2, 3, 4, 5];
var fsum = [2, 3, 4];
var fsums = [6, 66];
var list = [1, 2, 'gzf', { a: 1 }];
//事实上常见的类数组都有自己的接口定义,如IArguments,NodeList,HTMLCollection;
function sums() {
    var arg = arguments;
}
function sum(x, y) {
    return x + y;
}
//输入多余的或者少于要求的参数,是不被允许的
var mySum = function (x, y) {
    return x + y;
};
var mySums = function (x, y) {
    return x + y;
};
var mySearch;
mySearch = function (source, subString) {
    return source.search(subString) !== -1;
};
function buildName(firstName, lastName) {
    if (lastName) {
        return lastName + ' ' + firstName;
    }
    else {
        return firstName;
    }
}
//可选参数后面不允许再出现必须参数了
function buildAnimal(first, last) {
    if (last === void 0) { last = 'cat'; }
    return first + ' ' + last;
}
function pushArr(array) {
    var items = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        items[_i - 1] = arguments[_i];
    }
    items.forEach(function (item) {
        array.push(item);
    });
}
function reverse(x) {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    }
    else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
//TypeScript会优先从最前面的函数定义开始匹配,所以多个函数定义如果有包含关系
//需要优先把精确的定义写在前面。
//类型断言可以用来手动指定一个值的类型
function getStr(something) {
    if (something.length) {
        return something.length;
    }
    else {
        return something.toString().length;
    }
}
function getAdd(n) {
    if (typeof n === 'string') {
        return n;
    }
    else {
        return n();
    }
}
function handleEvent(ele, event) {
}
//元组合并了不同类型的对象;
var xcatliu;
xcatliu[0] = 'gzf';
xcatliu[1] = 25;
;
//private修饰的属性和方法在子类是不允许访问的,protected允许在子类中访问:
var Child = /** @class */ (function () {
    function Child(name) {
        this.name = name;
    }
    return Child;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        return _super.call(this, name) || this;
    }
    return Cat;
}(Child));
//抽象类是不允许被实例化的,抽象类的方法必须被子类实现
var Test = /** @class */ (function () {
    function Test(name) {
        this.name = name;
    }
    return Test;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.sayHi = function () {
    };
    return Dog;
}(Test));
var Gender = /** @class */ (function () {
    function Gender(name) {
        this.name = name;
    }
    Gender.prototype.sayGood = function () {
        return "my name is gzf";
    };
    return Gender;
}());
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.alert = function () {
    };
    Car.prototype.lightOn = function () {
    };
    Car.prototype.lightOff = function () {
    };
    return Car;
}());
//接口继承类
var Point = /** @class */ (function () {
    function Point() {
    }
    return Point;
}());
function getCounter() {
    var counter = function (start) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}
//泛型是指在定义函数、接口或者类的时候,不预先指定类型,而在使用的时候再指定
//类型类型的一种特性。T用来指代输入的任务类型。
function creteArray(length, value) {
    return;
}
function loggingIdentity(arg) {
    return;
}
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
function copyFields(target, source) {
    for (var id in source) {
        target[id] = source[id];
    }
    return target;
}
//合并的属性的类型必须是唯一的;
