const fs=require('fs')

const readStream= fs.createReadStream('./stream_example.txt','utf-8')
const wirteStream=fs.createWriteStream('./copy.txt')
readStream.on('data',(chunk)=>{
    console.log(chunk);
    wirteStream.write(chunk);
})

