const fs =require('fs');
const path= require('path');

//Create a dir
// fs.mkdir(path.join('folder'),{},err=>{
//     if(err) {
//         console.log("directory not created:-",err.message);
//         return;
    
//     }
//     console.log("directory created...")
// })

// create file
// read file 
// append on the file 


function divide10byn(n){
    return new Promise((resolve,reject)=>{
        console.log(n)
        if(n==0){
            reject(new Error("divide by zero erro"))
        }else{
            resolve(10/n);
        }
    })
    
}


divide10byn(10)
.then((answer)=>{
    divide10byn(0);
}).then((answer)=>{
        console.log("This is the last answer ")
})
.catch((error)=>{
    console.log(typeof error)
})
