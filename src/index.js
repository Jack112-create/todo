const express = require('express');

const api = express()
api.use(express.static(__dirname + '/public'));


api.listen(3000, () => {
    console.log('Api up and running.');
});

// api.get('/', (req, res) => {
//     res.send('Hello world!');
// })