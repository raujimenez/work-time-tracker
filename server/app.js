const express = require('express');
const bodyParser = require('body-parser');

const userRoute = require('./routes/user');
const loginRoute = require('./routes/login');

const app = express();
const port = '3030';


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/user', userRoute);
app.use('/login', loginRoute);

app.listen(port, async () => {
    console.log(`listening on localhost:${port}`);
});