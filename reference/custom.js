const sum=(num1,num2)=> num1+num2
const PI=3.14
class SomeMathObject{
    constructor(){
        console.log("created object")
    }
}
module.exports.addition=sum;
module.exports.PI=PI;
module.exports.SomeMathObject=SomeMathObject;