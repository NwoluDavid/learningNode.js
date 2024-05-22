// learning Path module.

const path =require("path");

 console.log(path.sep)
// to join path to a particular file
 const filePath =path.join('./content','./subfolder','text.txt')
console.log(filePath)

// to get the base name
const base = path.basename(filePath)
console.log(base)

// the absolute is gotten by using the path.resolve method
const absolute =path.resolve(__dirname,'content','subfolder','text.txt')
console.log(absolute)