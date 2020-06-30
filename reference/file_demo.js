const fs =require('fs');
const path= require('path');

// Create a dir
fs.mkdir(path.join('folder'),{},err=>{
    if(err) {
        console.log("directory not created:-",err.message);
        return;
    
    }
    console.log("directory created...")
})

// create file
fs.writeFile('example.txt',"this is an example",(err)=>{

    if(err){
        console.log(err);
    }else{
        console.log("Successfully created")

        // Read a file using utf-8 encoding
        fs.readFile('example.txt','utf-8',(err,file)=>{
            if(err){
                console.log(err);
            }else{
                console.log(file);
            }
        })
    }
})

// append on the file

// append file
fs.appendFile()

// rename file
fs.rename('example.txt','example2.txt',(err)=>{
    if(err){
        console.log("There was an error while renaming a file ",err)
    }else{
        console.log("File rename successfully")
    }
})