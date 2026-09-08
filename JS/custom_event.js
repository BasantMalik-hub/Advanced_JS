import { EventEmitter } from "events";

const emitter = new EventEmitter();

// event register usi
// ng .on() method

emitter.on("login", () => {
  console.log("User logged in");
});