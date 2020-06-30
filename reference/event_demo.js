const EvenEmitter=require('events');
const { EventEmitter } = require('events');
const eventEmitter=new EvenEmitter();

eventEmitter.on('tutorial',(num1,num2)=>{
    console.log(`tutorial event emitter ${num1} + ${num2} =${num1+num2}`);
})

eventEmitter.emit("tutorial",10,30);

class Person extends EventEmitter{
    constructor(name){
        super();
        this._name=name;
    }


    get name(){
        return this._name;  
    }
}

let thompson=new Person("thompson naidu");
thompson.on("name",()=>{
    console.log(`My Name is ${thompson.name}`);
});

let franky=new Person("franky naidu");
franky.on("name",()=>{
    console.log(`My Name is ${franky.name}`);
});

thompson.emit("name")
franky.emit("name")