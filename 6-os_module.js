// Built - in Modules
// e.g so, http ,path ...etc.


// Learning OS Module
// using os module

const os =require("os")
// info on current user
const user=os.userInfo()
console.log(user)

// info  on system uptime
 console.log("The system uptime" +"   " + os.uptime() + "  "+ "seconds")

// more on os module

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem: os.totalmem(),
    freeMem:os.freemem(),
}
console.log(currentOS)