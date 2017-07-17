const express		= require('express');
const path 			= require('path');

const app 			= express();
const port 			= process.env.PORT || 5000;
require('dotenv').config();

app.use(express.static(path.join(__dirname,'/public')));

app.get('/sample', (req,res) => {
	res.send('i am a sample');
});

app.get('/testPage', (req,res) => {
	res.sendFile(path.join(__dirname,'/public','/index.html'));
});

app.listen(port);
console.log(`server up at port ${port}`);
