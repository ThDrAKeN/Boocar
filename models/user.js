var db = require('../db');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');

getAllUser = () => new Promise((resolve, reject) => {
    db.query('SELECT * from user', function (error, results, fields) {
        if (error){
            reject();
        }else{
            resolve(results[0]);
        }
    });
});

saveUser = (userinfo) => new Promise((resolve,reject)=>{
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(userinfo.password, salt);

    userinfo.password = hash;
    userinfo.token = jwt.sign({Owner : userinfo.Owner},'secretkey');

    db.query('INSERT INTO user SET ?',userinfo,function(error,results,fields){
        if(error){
            reject();
        }else{
            resolve(userinfo);
        }
    })
});

getDispo = () => new Promise((resolve,reject)=>{

    db.query("SELECT DISTINCT voiture.idV , color, img, model, prix, specs, marque.imgLogo, marque.marqueVh as 'marque' from Voiture, marque, reserver, reservation  where marque.marqueVh = voiture.marqueVh  AND reservation.idR = reserver.idR  AND voiture.idV not in(select idV from reserver, reservation where reservation.idR = reserver.idR AND reservation.statu = 'working')", function (error, results, fields) {
        if (error){
            reject();
        }else{
            resolve(
                results
            );
        }
    });
});


// The code below export the above functios so it can be used in other files.
module.exports = {
    getDispo
};
