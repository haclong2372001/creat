const express = require('express')
const app = express()
const PORT =8000

app.listen(PORT,()=>{
    console.log('Server is listening on http://localhost:' +PORT)
})