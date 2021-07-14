const mongoose = require("mongoose");
const express = require('express')
const logger = require('morgan');
// const routes = require('./routes')

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI ||'mongodb://localhost/workout', {
    useNewUrlParser: true.valueOf,
    useUnifiiedTopology: true
})

app.use(require('./routes/api/api-routes.js'));
app.use(require('./routes/home-routes.js')) // GET REQUESTS FOR EXERCISE, STATS, HOMEPAGE

// app.use(routes)

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});
