const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const userRoute = require('./routes/User');
const loginRoute = require('./routes/Login');
const tasksRoute = require('./routes/Tasks');
const userTaskRoute = require('./routes/UserTask');

const app = express();
const port = '3030';

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/user', userRoute);
app.use('/login', loginRoute);
app.use('/tasks', tasksRoute);
app.use('/userTask', userTaskRoute);

app.listen(port, async () => {
    console.log(`listening on localhost:${port}`);
});