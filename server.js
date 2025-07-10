import express from 'express'
const app = express()
app.use(express.json())

const users = []

app.get('/users', (req, res) => {
    try {
        res.json(users)

        res.status(200)
        res.send('GET it´s working')
    } catch (error){
        res.status(500)
        res.send('Error')
    }
})

app.post('/users', (req, res) => {
    try {
        users.push(req.body)

        res.status(201)
        res.send('POST it´s working ')
    } catch {
        res.status(500)
        res.send('Error')
    }
})

app.listen(8000)