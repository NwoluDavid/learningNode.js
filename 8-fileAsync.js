// The asyncronus File system module
// is if the async method of the filesync in 7-filesync.
// notice we now use readFile and writeFile , these are the asyncronus methods.

const {readFile, writeFile} =require("fs")

// this async method will always require a callback function which will run once when the operation
// is done.
// the callback function takes two parameters the "err" which is the error exceptions
// and the result which is the content of the file.
// take on how everthing is indented , this ensure the varible first and second are seen, by 
// the write function

readFile('./content/first.txt','utf8',(err, result)=>{
    if (err){
        console.log(error)
        reture
    }
    const first =result

    readFile('./content/subfolder/text.txt', 'utf8',(err, result)=>{
        if (err){
            console.log(err)
            return
        }
        const second = result

        writeFile('./content/resultAsync.text',
        "Here is the result: "+ " "+ first +" " + second,(err, result)=>{
            if (err){
                console.log(err)
                return
            }
    
            console.log("done with this task")
    
    
        })
    })
})

console.log("starting the next task")