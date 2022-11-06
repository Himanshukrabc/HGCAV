const express = require('express');
const path = require('path');
const port = process.env.PORT || 8000;
const app = express();
const hbs=require('hbs');
hbs.registerPartials('./templates/partials')
require('./db/connection');


const staticPath = path.join(__dirname,"../public");
const templatePath = path.join(__dirname,"../templates/views");
app.use(express.static(staticPath));

app.set('view engine','hbs');
app.set('views',templatePath);

app.get("/",(req,res)=>{
    res.render("index");
});


app.listen(port,()=>{
    console.log(`Connection established at ${port}...`);
});