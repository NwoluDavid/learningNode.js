// Event Driven Programming.
//e.g we tell the server or browser to listing to a 
// specific event , we creat and event and set a function that 
//will run when such event happens e.g "user clicks a botten"


// import the event module
const EventEmitter = require("events")

const customeEmitter=new EventEmitter

customeEmitter.on("response", ()=>{
    console.log('you just doing great hang in there')
})

customeEmitter.emit("response")