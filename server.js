import {foutput} from './classifier.js'

import express from 'express'
import path from 'path'

const app = express()

let hostname = "127.0.0.1"
let port = "3000"

let __dirname = path.resolve()

app.set('view engine','ejs')
app.use(express.urlencoded())
app.use(express.static(path.join(__dirname, "public" )))


app.get('/home',(req,res) => {
    res.sendFile(path.join(__dirname + '/home.html'))
})

app.get('/symptoms',(req,res) => {
    res.sendFile(path.join(__dirname + '/symp.html'))
})
app.get('/about',(req,res) => {
    res.sendFile(path.join(__dirname + '/about.html'))
})
app.get('/info',(req,res) => {
    res.sendFile(path.join(__dirname + '/info.html'))
})



app.post("/result",(req,res) => {
    console.log("symp", req.body)

    let msg = Object.keys(req.body)
    let output = foutput(msg.toString())
    console.log('output',output)

    let highP = output.slice(0,3)
    let mediumP = output.slice(3,7)
    let lowP = output.slice(7, output.length)

    let data = {high: highP, med: mediumP, low: lowP}

    res.render('output.ejs',{diseaseData: data})
})


app.listen(port,hostname,()=>console.log('Server Running at ' + hostname + ":" + port))


