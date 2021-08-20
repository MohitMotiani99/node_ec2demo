var express = require('express')
var app = express()
app.listen(3300,()=>{
    console.log('started')
})
app.get('/',(req,res)=>{
    res.send('Hello from Server')
})