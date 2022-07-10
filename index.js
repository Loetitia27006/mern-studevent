const express = require('express')
const app = express()
const cors = require('cors')
const eventsRoutes = require('./routes/events.routes')

app.use(express.json())
app.use(cors())


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use("",eventsRoutes)






app.listen(8000, () => {
    console.log('Running app express on port 8000')
})





