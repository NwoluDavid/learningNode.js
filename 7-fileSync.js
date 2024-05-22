// File Modules
// the file modules helps us to read and write into a file.

const {readFileSync, writeFileSync} =require("fs")

const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/subfolder/text.txt','utf8')

console.log(first, second)

// this is the write to a file 
// if the file provided in the path is found , node will create create the  file
// note the writefilesync takes two arguments , first is the file or filepath , the second is the content
// you want to write into the file
// we can add another argument {flag : "a"} this append to the end of the file.

writeFileSync(
    './content/result-sync.txt','Here is the result:' + first + '  ' + second,{flag : "a"}
)