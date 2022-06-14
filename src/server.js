'use strict';

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3002;

app.get('/', (req, res) => {
    res.status(200).send('Looks good.');
})

app.get('/hello', (req, res) => {
    res.status(200).send('Hello!');
})

function start () {
    app.listen(PORT, () => console.log(`listening on port ${PORT}`));

}

module.exports = {
    app,
    start
}
