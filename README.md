# Boocar - Backend

## Getting started!
> Prequisites!

You need to have a computer running the following:
  - [NODE.JS](https://nodejs.org/en/)
  - [MYSQL](https://www.mysql.com/)

> Step 1

1) Git clone the repo to your computer
2) Run the following command `npm install`
3) Go to the db.js file in the root and configure the database settings
4) Copy the sql create statement from `database_create.sql` and run it inside the mysql terminal or phpmyadmin or mysqlworkbench, to create the users table.
5) Run the following command `node index.js`

Thanks it! You have a running platform!

### Tech
The repo is using the following tech, I will break them down one by one for ease of use.

* [Node JS] - The server.
* [Express JS] - The framework that fits over Node.js.
* [MYSQL] - The database that is used with this template.
* [Json web token] - A token auth system to show how to use auth if you want to connect front and backend.
* [Bcrypt] - A framework that encrypts password and can be used to encrypt other things too.


### Break down
> `index.js`

The code below takes care of calling all the database functions to you index.js file.
```sh
const {getDispo,setRes, getRes} = require('./models/all');
```
Authenticate is the middle that is being used to authenticate the front-end or user
Via the token, so all the functions you would want to restrict can be done with the below method.
```sh
const {authenticate} = require('./middleware/authenticate');
```
There are three functions in the index.js file for the app.
A `POST` request , `GET` request, and an authentication function to show how authentication middle ware is used.
The function below just renders the index.html file from the public folder in the root directory and shows it to the screen when you type
localhost:3000
```sh
app.get('/', function(req, res, next) {
   res.render('index');
});
```
The function below `/createRes`, creates a new reservation and stores it in the db.
The function calls `setRes` from the `all` and then saves the reservation, and returns the status back to the user. You can notice that `Promises` are being used.
If the function fails to register it returns a 400 error to the user.
If you want to learn more click: [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
```sh
/* The function below
app.post('/createRes', (req, res, next) => {
    setRes(req.body).then((result) => {
        const id = result
        return res.send({id});
    }).catch((e) => {
        return res.status(400).send(e);
    });
});
```

> `models/all.js`

The model has all sql functionality. It returns a `Promise` in all of the calls.
But for example lets take the function that creates a new user.
1) It inserts to the right table
2) returns back the status of the table that just got inserted.

```sh
setRes = (userinfo) => new Promise(async (resolve, reject) => {


    let id
    let res = { statu: "Waiting Call" }

    await db.query('INSERT INTO reservation SET ?', res, function (error, results, fields) {
        if (error) {
            reject();
        } else {
            id = results.insertId
            userinfo["idR"] = id

            db.query('INSERT INTO reserver SET ?', userinfo, function (error, results, fields) {
                if (error) {
                    reject();
                } else {
                    resolve(results.insertId);
                    // return (results.insertId)
                }
            })

        }
    })


});
```

### Author

 - Axel REGIMBAL

