import express from "express"
import hbs from "hbs"
import path from "path"

const __dirname = path.resolve()
const app = express()

app.use(express.urlencoded())



app.get('/', (req, res) => {
    res.render('index', {mainTitle: 'Джинкс', users: users})
})

app.get('/about', (req, res) => {
    res.render('about', {mainTitle: 'О нас'})
})

const users = [
    { id: 1, name: "Вай", position: "(старшая сестра)", ocpt: "Стражник" },
    { id: 2, name: "Вандер", position: "(первый приёмный отец)" },
    { id: 3, name: "Силко", position: "(второй приёмный отец)", ocpt: "Наркобарон, промышленник, химбарон" }
]

app.get('/users', (req, res) => {
    res.render('users', {mainTitle: 'Семья', users: users})
})

app.get('/users/:user_id', (req, res) => {
    // res.send(req.params)
    const user = users.find((us) => us["id"] === parseInt(req.params["user_id"]))
    res.render('user',  {mainTitle: user.name, user: user})
})

app.post('/search', (req, res) => {
    res.send(req.body)
    console.log(req.body)
})

app.listen(3000, () => {
    console.log('express app!!!')
})

app.set('view engine', 'hbs')
hbs.registerPartials(path.join(__dirname, 'views/partials'))
app.use(express.static(__dirname + '/public'))