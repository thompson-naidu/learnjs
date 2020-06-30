const path=require('path');

// get the base name
console.log(path.basename(__filename));

// get the extension name 
console.log(path.extname(__filename));

// get the file information
console.log(path.parse(__filename));

//Contcatenate file path 
console.log(path.join(__dirname,'information','hello world'));

