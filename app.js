const path = require('path')
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'pug')
app.set('views','views')

//order doesnt mater
//importing router
const adminData = require('./routes/admin');
const shopRouter = require('./routes/shop');

app.use(bodyParser.urlencoded({extends:false}));
//can register mutliple static file
app.use(express.static(path.join(__dirname,'public')))

//filter route . so it will go adminroute only when /admin url matches
//common starting segment , can be used in different routes
app.use('/admin',adminData.routes);
app.use(shopRouter);

app.use((req,res,next) => {
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})

app.listen(3000)