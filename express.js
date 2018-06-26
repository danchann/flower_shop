const express = require('express');
const serveStatic = require('serve-static');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');

const staticBasePath = './';

const path = require('path');
const app = express();

app.use(serveStatic(staticBasePath, {'index': false}))
//app.use(express.static('public/flowershop'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(fileUpload());


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/login', function(req, res) {
    console.log(req.body);
    console.log(req.files);
    res.send('Login information received')
});

app.listen(3001);
console.log('Started')

