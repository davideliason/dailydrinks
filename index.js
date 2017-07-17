const express		= require('express');
const path 			= require('path');

const app 			= express();
const mongodb  	    = require('mongodb');
const MongoClient   = mongodb.MongoClient;

require('dotenv').config();


const port 			= process.env.PORT || 5000;
const drinks 		= require('./drinks.js');


app.use(express.static(path.join(__dirname,'/public')));


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

	app.post('/sample', (req,res) => {
		res.send('POST request has been received');
	});

	app.get('/samplePostForm', (req,res) => {
		res.sendFile(path.join(__dirname,'/public','/index.html'));
	});

	



	app.listen(port);
	console.log(`server up at port ${port}`);

 });


