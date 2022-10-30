const EventEmitter = require("events");
const event = new EventEmitter();

event.on("sayMyName", (msg, msg1) => {
  console.log("Hi Abhi.....", msg, msg1);
});
event.on("sayMyName", (msg, msg1) => {
  console.log(`${msg1} !! ${msg}.....`);
});

event.emit("sayMyName", "soham", "Hii");
