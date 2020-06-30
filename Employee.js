const { create } = require("domain");

class Employee{
    
    speak(){
        console.log(`I am ${this.type} employee`)
    }

    
}

class FullTimeEmployee extends Employee{
 
    constructor(){
        super();
        this.type="fulltime"
    }

}


class ContractEmployee extends Employee{
 
    constructor(){
        super();
        this.type="Contract"
    }

}

class PartTimeEmployee extends Employee{
 
    constructor(){
        super();
        this.type="Parttime"
    }

}

module.exports=function createEmployee(type){

    switch(type){
        case 'fulltime': return new FullTimeEmployee();
        case 'parttime':return new PartTimeEmployee(); 
        default:return new ContractEmployee();
    }
}
