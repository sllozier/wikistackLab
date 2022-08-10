const express = require('express');
const app = express();
const morgan = require('morgan');

app.use('/public', express.static('public'));
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
    console.log('Hello World!');
})
app.get('/', (req, res)=>{
    res.send('<h1>Hello World</h1>')
})
app.listen(3000);
