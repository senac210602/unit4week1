
// console.log(process.env.PORT)
// console.log(process.env.DBPASS)
// console.log('im done')
const dotenv = require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 9000

app.use(cors())
app.use(express.json())

app.use('/api/',(_, res)=> {
    res.json({data:'API data served'})

})

app.listen(port,()=> {
    console.log(`server is on port ${port}`)
})