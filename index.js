var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

/* Getting all the db querys */
const { getDispo, setRes } = require('./models/all');
/* This middle ware checks if the token given by the user is right */
const { authenticate } = require('./middleware/authenticate');

// The code below allows the node js to find the public directory with the index.html file
const publicPath = path.join(__dirname, './public');
// Node js is using port 3000/ and when you push to cloud it will use process.env.PORT
const port = process.env.PORT || 3000;

// Bodyparser for using json data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(publicPath));


/* GET index page */
app.get('/', function (req, res, next) {
    res.render('index');
});

/* This function saves a user to the db
    It uses promises.
 */
app.post('/createRes', (req, res, next) => {
    setRes(req.body).then((result) => {
        console.log("🚀 ~ file: index.js ~ line 32 ~ setRes ~ result", result)
        const id = result
        return res.send({id});
    }).catch((e) => {
        return res.status(400).send(e);
    });
});

app.get('/test', (req, res, next) => {
    getDispo().then((result) => {
        return res.send(result );
    }).catch((e) => {
        return res.status(400).send(e);
    });

});


/* When the user from the front-end wants to use a function,
 The below code is an example of using the word authenticate to see if the
 user is actually authenticated
*/
app.get('/get/me', authenticate, (req, res, next) => {
    res.send(req.user);
});

app.listen(port, () => {
    console.log(`Server is up on ${port}`);
});
