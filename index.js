const express = require('express')
const app = express()
const nunjucks = require('nunjucks')
const bodyParser = require("body-parser")

const things = require('./model/things')
const selectItems = [
    { name: 'no thing', type: 0 },
    { name: 'thing', type: 1 },
    { name: 'animal', type: 2 },
    { name: 'all', type: 3}
]

app.use('/public', express.static('public'))
nunjucks.configure('views', {
    autoescape: true,
    express: app,
    watch: true,

})
app.engine('html',nunjucks.render)
app.set('view engine','html')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
	extended: true
}))
// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.render('index', {
        data: selectItems
    })
})


app.post('/post/server', (req, res) => {
    const info = req.body.data
    res.render('data', {
        data: things.getThing(info)
    })
})

app.listen(3000, function () {
    console.log('server on running on port 3000!')
})