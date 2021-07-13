const mongoose = require("mongoose");
const express = require('express')
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(express.static('public'));

mongoose.connect('mongodb://localhost/ExampleSchema', {
    useNewUrlParser: true.valueOf,
    useUnifiiedTopology: true
})

app.use(require(''));
app.use(require('./routes/home-routes')) // GET REQUESTS FOR EXERCISE, STATS, HOMEPAGE

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});
