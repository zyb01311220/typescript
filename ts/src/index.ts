let isDone: boolean = false;
let createByNewBoolean:Boolean=new Boolean(1);
let decLiteral:number=6;
let noNumber:number=NaN;
let inifityNumber:number=Infinity;
let hexLiteral:number=0xf00d;
let myName:string='gzf';
let myAge:number=25;
let sentence:string=`Hello my name is ${myName}`;
let agestr:string=`I'll be ${myAge+1} years old`;
function alertName():void{
//    alert('my name is fairy');
}
//null和undefined是所有类型的子类型;
let unuseable:void=undefined;
let u:undefined=undefined;
let n:null=null;
let numbers:number=undefined;
let us:undefined;
let num:number=us;
let myFavoriteNumber:any='seven';
myFavoriteNumber=7;
//变量如果在声明的时候,未指定其类型,那么它会被识别为任意类型。
//如果定义的时候没有赋值,不管之后有没有赋值,都会被推断成any类型而完全不被
//类型检查。
let mys: string | number;
mys=6;
mys='six';
function getLength(something:string|number):string{
   return something.toString();
}
//只能访问联合类型的所有类型的共有属性或方法
//在面向对象语言中,接口是一个很重要的概念,它是对行为的抽象,而具体任何行动,
//需要用类去实现,TypeScript中类是一个非常灵活的概念,除了可用于对类的一些
//行为进行抽象以外,也常用于对[对象的形状]进行描述。
interface Person {
  readonly id:number;//只读属性
  name:string;
  age?:number; //加上问号表示可选属性
  [propName:string]:any;//允许任意属性
}
let tom:Person={
    id:89757,
    name:'gzf',
    gender:'female'
}
//一旦定义了任意属性,那么确定属性和可选属性必须是它的类型的子集
//只读的约束存在于第一次给对象赋值的时候,而不是第一次给只读属性赋值的时候;
let fibonacci:number[]=[1,2,3,4,5];
let fsum:Array<number>=[2,3,4];
interface NumberArray{
    [index:number]:number;
}
let fsums:NumberArray=[6,66];
let list:any[]=[1,2,'gzf',{a:1}];
//事实上常见的类数组都有自己的接口定义,如IArguments,NodeList,HTMLCollection;
function sums(){
    let arg:IArguments=arguments;
}
function sum(x:number,y:number):number{
    return x+y;
}
//输入多余的或者少于要求的参数,是不被允许的
let mySum=function(x:number,y:number):number{
    return x+y;
}
let mySums:(x:number,y:number)=>number=function(x:number,y:number):number{
    return x+y;
}
//在TypeScript的类型定义中,=>用来表示函数的定义,左边是输入类型,需要用括号
//括起来,右边是输出类型。
interface searchFunc{
   (source:string,subString:string):boolean;
}
let mySearch:searchFunc;
mySearch=function(source:string,subString:string){
  return source.search(subString)!==-1;
}
function buildName(firstName:string,lastName?:string){
   if(lastName){
       return lastName+' '+firstName;
   }else{
       return firstName;
   }
}
//可选参数后面不允许再出现必须参数了
function buildAnimal(first:string,last:string='cat'){
  return first+' '+last;
}
function pushArr(array:any[],...items:any[]){
   items.forEach(function(item){
       array.push(item);
   })
}
//重载允许一个函数接受不同数量或者类型的参数时,作出不同的处理。
function reverse(x:number):number;
function reverse(x:string):string;
function reverse(x:number|string):number|string{
  if(typeof x==='number'){
      return Number(x.toString().split('').reverse().join(''));
  }else if(typeof x==='string'){
      return x.split('').reverse().join('');
  }
}
//TypeScript会优先从最前面的函数定义开始匹配,所以多个函数定义如果有包含关系
//需要优先把精确的定义写在前面。
//类型断言可以用来手动指定一个值的类型
function getStr(something:string|number):number{
  if((<string>something).length){
    return (<string>something).length;
  }else{
      return something.toString().length;
  }
}
//类型断言不是类型转换,断言成一个联合类型中不存在的类型是不允许的
declare class Animal{
    name:string;
    constructor(name:string);
    sayHi():string;
}
//定义枚举;
declare enum Directions{

}
export let namestr:string;
interface Math{
    pow(x:number,y:number):number;
}
type Name=string;
type NameResolve=()=>string;
type NameOrResolver= Name|NameResolve;
function getAdd(n:NameOrResolver):Name{
   if(typeof n==='string'){
       return n;
   }else{
       return n();
   }
}
type EventNames='click'|'scroll'|'mousemove';
function handleEvent(ele:string,event:EventNames){
}
//元组合并了不同类型的对象;
let xcatliu:[string,number];
xcatliu[0]='gzf';
xcatliu[1]=25;
const enum Color {Red, Green, Blue = "blue"};
//private修饰的属性和方法在子类是不允许访问的,protected允许在子类中访问:
class Child{
  protected name;
  public constructor(name){
      this.name=name;
  }
}
class Cat extends Child{
    constructor(name){
       super(name);
    }
}
//抽象类是不允许被实例化的,抽象类的方法必须被子类实现
abstract class Test{
    public name;
    public constructor(name){
        this.name=name;
    }
    public abstract sayHi();
}
class Dog extends Test{
    public sayHi(){
    }
}
class Gender{
  name:string;
  constructor(name:string){
     this.name=name;
  }
  sayGood():string{
      return `my name is gzf`;
  }
}
//一个类实现多个接口;
interface Alarm{
    alert();
}
interface Light{
    lightOn();
    lightOff();
}
class Car implements Alarm,Light{
    alert(){

    }
    lightOn(){

    }
    lightOff(){

    }
}
//接口继承接口
interface test{
  alert();
}
interface fairy extends test{
  say();
}
//接口继承类
class Point{
    x:number;
    y:number;
}
interface Point3d extends Point{
    z:number;
}
interface Counter{
    (start:number):string;
    interval:number;
    reset():void;
}
function getCounter():Counter{
    let counter=<Counter>function (start:number){};
    counter.interval=123;
    counter.reset=function(){};
    return counter;
}
//泛型是指在定义函数、接口或者类的时候,不预先指定类型,而在使用的时候再指定
//类型类型的一种特性。T用来指代输入的任务类型。
function creteArray<T=string>(length:number,value:T):Array<T>{
  return;
}
interface LengthWise{
    length:number;
}
function loggingIdentity<T extends LengthWise>(arg:T):T{
  return;
}
class GenericNumber<T>{
  zeroValue:T;
  add:(x:T,y:T)=>T;
}
function copyFields<T extends U, U>(target: T, source: U): T {
    for (let id in source) {
        target[id] = (<T>source)[id];
    }
    return target;
}
//合并的属性的类型必须是唯一的;