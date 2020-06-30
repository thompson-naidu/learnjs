const fs =require('fs');
const path= require('path');


// create file
fs.writeFile('example.txt',"this is an example",(err)=>{

    if(err){
        console.log(err);
    }else{
        console.log("Successfully created")

        // Read a file using utf-8 encoding
        // fs.readFile('./example.txt','utf-8',(err,file)=>{
        //     if(err){
        //         console.log(err);
        //     }else{
        //         console.log(file);
        //     }
        // })
    }
})

// append file
fs.appendFile('./example.txt',"This is the appended data",{encoding:'utf-8'},(err)=>{

    if(err)
        console.log(err)
    else 
        console.log("data appended successfully")
})


// rename file
fs.rename('example.txt','example2.txt',(err)=>{
    if(err){
        console.log("There was an error while renaming a file ",err)
    }else{
        console.log("File rename successfully")
        fs.unlink('example2.txt',(err)=>{
            if(err)
                console.log(err)
            else
                console.log("file deleted successfully")
        })
    }


})


// unlink file or delete file 
fs.unlink('example2.txt',(err)=>{
    if(err)
        console.log(err)
    else
        console.log("file deleted successfully")
})


// Create a dir
fs.mkdir(path.join('folder'),{},err=>{
    if(err) {
        console.log("directory not created:-",err.message);
        return;
    
    }
    console.log("directory created...")
})

// remove or delete a directory
fs.rmdir(path.join('folder'),err=>{
    if(err) {
        console.log("directory not deleted:-",err.message);
        
    }else{
        
    console.log("directory deleted...")
    }
})

// read the directory
fs.readdir('./folder',(err,files)=>{

    if(err){
        console.log(err)
    }else{
        console.log(files)

        for(let file of files){
            fs.unlink('./folder/'+file,err=>{
                if(err){
                    console.log(err);
                }else{
                    console.log(`${file} is been deleted`)
                }
            })
        }
    }
})