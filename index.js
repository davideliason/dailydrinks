const express		= require('express');
const path 			= require('path');
const bodyParser 	= require('body-parser');

const app 			= express();
const mongodb  	    = require('mongodb');
const MongoClient   = mongodb.MongoClient;

require('dotenv').config();


const port 			= process.env.PORT || 5000;
const drinks 		= require('./drinks.js');

// middleware
app.use(express.static(path.join(__dirname,'/public')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


MongoClient.connect( process.env.MONGOLAB_URI, (err,database) => {
	if(err) return console.log(err)
	console.log('connected to mLab db');

    db = database;


	app.get('/drinklog', (req,res) => {
		db.collection('drinklog').find().toArray(function(err,result){
			if(err)return console.log(err)
			console.log("results here:" + result[0].drink);
		});
	});

	// use Router
	app.use('/drinks', drinks);

	app.get('/sample', (req,res) => {
	  res.send('i am a sample');
	});

	app.post('/serverDrink', (req,res) => {
		console.log(req.body);
	});

	app.get('/samplePostForm', (req,res) => {
		res.sendFile(path.join(__dirname,'/public','/index.html'));
	});

	app.listen(port);
	console.log(`server up at port ${port}`);

 });


