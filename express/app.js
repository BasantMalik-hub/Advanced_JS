import express from 'express'

const app = express()
console.log(app)

// get(path,callback)

app.get("/index",(req,res)=>{
    res.sendFile("index.html",{root: '.'})
})
app.get("/home",(req,res)=>{
    res.send("welcome from express")
})
const PORT = 3000
app.listen(PORT,()=>{
    console.log("server is running...")
})

// text , json , html




