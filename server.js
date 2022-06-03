'use strict';
var developerNameDefault = 'JeShon Edwards';
var developerCountry = 'United States';

var express = require('express');

var app = express();


//create handlebars with default layout
var handlebars = require('express-handlebars')
    .create({ defaultLayout: 'main' });

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res, next) {
    res.render('home', {
        layout: 'main',
        developerName: developerNameDefault,
        countryName: developerCountry
    });
});

//Error Exception
//404
app.use(function (req, res) {
    res.status(404);
    res.render('404');
})
//500
app.use(function (err,req, res) {
    console.error(err.stack);
    res.status(500);
    res.render('500');
})
app.listen(app.get('port'), function () {
    console.log('Express started on http://localhost:' + app.get('port'));
})