const express = require('express')
const app = express()

app.use(express.json())

const eventList = [
    {
        id: 1,
        name: 'Event 1',
        date: '2020-01-01',
    },
    {
        id: 2,
        name: 'Event 2',
        date: '2020-01-02',
    }
]

//Get all events
app.get('/events', (req, res) => {
    res.send(eventList)
})

//Get one event
app.get('/events/:id', (req, res) => {
    const event = eventList.find(event => event.id === parseInt(req.params.id))
    if(!event) {
    res.status(404).send({message:`Event not found`})
    }
    res.send(event)
})

//Create event
app.post('/events', (req, res) => {
    const event = {
        id: eventList.length + 1,
        name: req.body.name,
        date: req.body.date,
    }
    eventList.push(event)
    res.status(200).send(event)
})

// Update event
app.patch('/events/:id', (req, res) => {
    const event = eventList.find(event => event.id === parseInt(req.params.id))
    if(!event) {
        res.status(404).send({message:`Event not found`})
    }
    if(req.body.name) event.name = req.body.name
    if(req.body.date) event.date = req.body.date

    
    
    res.send(event)
})

// Delete event
app.delete('/events/:id', (req, res) => {
    const event = eventList.find(event => event.id === parseInt(req.params.id))
    if(!event) {
        res.status(404).send({message:`Event not found`})
    }
    const index = eventList.indexOf(event)
    eventList.splice(index, 1)
    res.status(200).send(event)
})

app.listen(8000, () => {
    console.log('Running app express on port 8000')
})





