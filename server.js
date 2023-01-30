const express = require('express');
let lolChampions = require('lol-champions')


const app = express()

app.use(express.static(__dirname + "/public"))
app.use(express.static(__dirname + "/node_modules/bootstrap/dist/css"))

app.set('view engine', 'ejs'); //svaki put renderovao proveri dali ima varijabli


app.get('/', (req, res) => {
    res.render('index', {champions: lolChampions})
})

app.get('/champion/:id', (req, res) => {
    let champion = lolChampions.find(el => el.id === req.params.id)
    let colors = {
        Fighter: "warning",
        Tank: "danger",
        Mage: "primary"
    }
    res.render('champion', {champion, colors: colors})
})

app.get('/delete/:id', (req, res) => {
    lolChampions = lolChampions.filter(el => el.id !== req.params.id);    
    res.redirect('/');
})


app.listen(3000, function () {
    console.log('server ..... ');
})