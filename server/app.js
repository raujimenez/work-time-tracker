const express = require('express');
const app = express();
const port = '3030';

const userRoute = require('./routes/user');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// add users
app.use('/user', userRoute);


app.listen(port, async () => {
    console.log(`listening on localhost:${port}`);
});