const express = require('express')
const app  = express()
const port = 3000 

app.use(express.static('public'))
app.set('view engine', 'ejs')

app.get('/',(req, res)=>{
    res.render('home')

})

app.post('/CreateBlog', (req, res)=>{
    res.render('Create')
})

app.listen(port,  () => {
    console.log(`Blog is listening to port:${port}`)
})