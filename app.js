const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const ejs = require('ejs');
const path = require('path');
const userModel = require('./model/user');

const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.set('views', path.join(__dirname, 'views'));
app.engine('.html', ejs.__express);
app.set('view engine', 'html');
app.get('/', (req, res) => {
    res.render('index');
});
app.post('/user', async (req, res) => {
    const userId = req.body.userId;
    const userInfo = await userModel.getUserById(userId);
    res.json(userInfo);
});
app.listen(9090, () => {
    console.log('Express Server is running on: http://localhost:9090');
});