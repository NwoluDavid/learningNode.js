const{writeFileSync}=require("fs")

const create =(path) =>{
    try{
        for(let i=0; i<10000; i++){
            writeFileSync(path, "Hello David " +" " + i +"\n", {flag: "a"})
        }
    }catch (error){
        console.log(error)
    }
    console.log("process completed ")
}

create("./content/big.txt")