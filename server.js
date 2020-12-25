// @ts-nocheck
const express = require('express');
const app = express();

app.use(express.static('phaser3-tutorial-src'));

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

app.get('/test', (req, res) => {
	res.sendFile(__dirname + '/phaser3-tutorial-src/part10.html');
});

app.listen(3000, () => {
	console.log('http://localhost:3000 Server Started!');
});
