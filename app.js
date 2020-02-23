const express = require('express');
const fs = require('fs');

const app = express();
const dataFile = './data.json';
const port = 3000;

const dataService = require('./data.service');
const data = dataService.getFile(dataFile);
const fieldNames = dataService.getFieldNames.map(i => i.name);
const fieldLabels = dataService.getFieldNames.map(i => i.label);


app.get("/", (req, res) => {
   let headerRow = `<tr scope="row">
      ${fieldLabels.map(i => `<th scope="col">${i}</th>`).join('')}
   </tr>   
   `;

   let bodyRows='';
   for (i of data.users) {
      bodyRows += `<tr scope="row">
         ${fieldNames.map(j => `<td scope="col">${i[j]}</td>`).join('')}
      </tr>`;
   }

   const result = `
   <!doctype html>
      <html lang="en">
      <head>
         <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
         <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
         <title>Hello, world!</title>
      </head>
      <body>
         <div class="container">
         <table class="table table-striped table-dark"><thead>${headerRow}</thead><tbody>${bodyRows}</tbody></table>
         </div>
      </body>
      </html>
   `;
   res.send(result).end();
})

app.listen(port, () => console.log(`Listening on port ${port}`));