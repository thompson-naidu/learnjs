const http=require('http')
const fs=require('fs')
const server= http.createServer((req,res)=>{

    if(req.url == '/'){
        res.write("hello world from node js")
        res.end();
    }else if(req.url == '/data'){
        const readStream=fs.createReadStream('./data.json','utf-8')
        res.writeHead(200,{"Content-type":"json"})
        readStream.pipe(res);
    }else{
        res.write("using some other domain")
        res.end();
    }

});

server.listen(3000,(error,port)=>{
    if(error)
        console.log(error)
    else 
        console.log("server running")
})