const express = require('express')
const app = express()
const port = 3001
const path = require('path')

app.set('view engine', 'ejs')

app.listen(port, () => {
    console.log(`Hello World app listening on port ${port}`)
})
app.get('/', (req,res) => {
    res.render('pages/index')
})

app.get('/profile', (req,res) => {
    res.render('pages/profile')
})

app.get('/login', (req,res) => {
    res.render('pages/login')
})

app.get('/register', (req,res) => {
    res.render('pages/register')
})

app.get('/user', (req,res) => {
    res.render('pages/user')
})

app.use(express.static(path.join(__dirname,  'public')))