var http = require("http")
var fs = require("fs")

const server = http.createServer((req, res)=>{
    // const text =fs.readFileSync("./content/big.txt","utf8")
    // res.end(text)
    const filestream = fs.createReadStream("./content/big.txt", "utf8")
    filestream.on("d")
})  

server.listen(5000, (err)=>{
    if (err){
        console.log(err)
    }
    else{
        console.log("server is listening to port 5000")
    }
})
