// The Node.js Event Loop , Timers,and Process.nextTick()

//what is the Event Loop ?

// this is a much more clean way to do it.
const {readFile , writeFile} = require("fs").promises


//This is another way to do it
// const util =require("util")
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

// """This is one way of doing an asynchronus function"""
// const getText = (path)=>{
//     // this is a wrapper for the readfile function
//     return new Promise ((resolve, reject)=>{
//         readFile(path,"utf8",(err,data)=>{
//             if (err){
//                 reject(err)
//             }else{
//                 resolve(data)
//             }
//         })

//     })   
// }

const start = async()=>{
    try{
        const first = await readFile('./content/first.txt', "utf8")
        const second = await readFile('./content/second.txt', "utf8")
        await writeFile("./content/result-test.txt", 
        '\n /t This is a good day to learning how to code in javascript' , {flag : "a"})
        console.log(first)
        console.log(second)
    } catch(error) {
        console.log (error)
    }
}

start()