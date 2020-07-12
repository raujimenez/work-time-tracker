const express = require('express');
const bodyParser = require('body-parser');

const userRoute = require('./routes/User');
const loginRoute = require('./routes/Login');
const tasksRoute = require('./routes/Tasks');

const app = express();
const port = '3030';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/user', userRoute);
app.use('/login', loginRoute);
app.use('/tasks', tasksRoute);

app.listen(port, async () => {
    console.log(`listening on localhost:${port}`);
});