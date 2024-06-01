// this demostrtes how a module can be imported 

// importing module
const names =require("./3-module")
const Greet =require("./4-utils")
console.log(names)
console.log(Greet)

Greet.sayHi(names.john)

Greet.sayhey("david")
Greet.sayHi(names.peter)
Greet.sayHi(names.john)