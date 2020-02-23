const express = require('express');
const fs = require('fs');

const app = express();
const dataFile = './data.json';
const port = 3000;

const dataService = require('./data.service');
// console.log(dataService.getFile);
console.log(dataService.getFile(dataFile));

try {
   data = JSON.parse(fs.readFileSync(dataFile));
} catch(err) {
   throw err;
};





app.listen(port, () => console.log(`Listening on port ${port}`));