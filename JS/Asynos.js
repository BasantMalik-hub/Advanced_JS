console.log("========== Synchronous start =======");
for (let i=0; i<5; i++){
    console.log(`${i}`);
}
console.log("========== Synchronous end =======");
console.log("========== Asynchronous start =======");
setTimeout(()=>{
    console.log("========== Basant =======");
}, 2000);
console.log("========== Asynchronous end =======");