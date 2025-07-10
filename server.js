import express from 'express'
import pkg from '@prisma/client'

const { PrismaClient } = pkg
const prisma = new PrismaClient()
const app = express()

app.use(express.json())

app.get('/users', async (req, res) => {
    try {
        const users = await prisma.user.findMany()
        res.send(users)

        res.status(200)
        res.send('GET it´s working')
    } catch (error){
        console.error(error); 
        res.status(500).send('Internal Server Error');
    }
})

app.get('/users/:id', async (req, res) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                id: req.params.id 
            }
        })
        if (!user) {
            res.send('Digite um ID válido')
        } else {
            res.send(user)
        }
        res.status(200)
        res.send('GET it´s working')
    } catch (error){
        console.error(error); 
        res.status(500).send('Internal Server Error');
    }
})

app.post('/users', async (req, res) => {
    try {
        await prisma.user.create({
            data: {
                email: req.body.email,
                name: req.body.name,
                age: req.body.age,
            }
        })

        res.status(201)
        res.send('POST it´s working ')
    } catch (error){
        console.error(error); 
        res.status(500).send('Internal Server Error');
    }
})

app.put('/users/:id', async (req, res) => {
    try {
        const user = await prisma.user.update({
            where: {
                id: req.params.id
            },
            data: {
                email: req.body.email,
                name: req.body.name,
                age: req.body.age,
            }
        })
        if (!user) {
            res.send('Digite um ID válido')
        } else {
            res.send('Atualização feita com sucesso')
        }
        res.status(201)
        res.send('PUT it´s working ')
    } catch (error) {
        console.error(error); 
        res.status(500).send('Internal Server Error');
    }
})

app.delete('/users/:id', async (req, res) => {
    try {
        const user = await prisma.user.delete({
            where: {
                id: req.params.id
            },
        })
        if (!user) {
            res.send('Digite um ID válido')
        } else {
            res.send('Deletado feita com sucesso')
        }
        res.status(201)
        res.send('DELETE it´s working ')
    } catch (error) {
        console.error(error); 
        res.status(500).send('Internal Server Error');
    }
})


app.listen(8000)