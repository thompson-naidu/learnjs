const readline=require('readline');

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

let num1=Math.floor((Math.random()*10)+1);
let num2=Math.floor((Math.random()*10)+1);

rl.question(`What is ${num1} + ${num2} ?\n`,(userInterface)=>{
    answer=num1+num2;
    if(userInterface.trim() == answer){
        rl.close();
    }else{
        rl.setPrompt("Incorrect response please try again..\n");
        rl.prompt();
        rl.on('line',userInterface=>{
            if(userInterface.trim() == answer){
                    rl.close()
            }else{
                rl.setPrompt(`Incorrect response please try again.What is ${num1} + ${num2} ?\n`);
                rl.prompt();
            }
        })
    }
})

rl.on("close",()=>{
    console.log("Correct !!")
})
