import express from "express"
import path from "path"
import open from "open"

const port = 8080
const app = express()

app.get('/', function(request, result) {
    result.sendFile(path.join(__dirname, '../src/index.html'))
})

app.listen(port, function(err) {
    if (err) {
        console.log(err)
    } else {
        open('http://localhost:' + port)
    }
})