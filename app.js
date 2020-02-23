const express = require('express');
const fs = require('fs');

const app = express();
const dataFile = './data.json';
const port = 3000;
const dataService = require('./data.service');

const template = require('./app.template');
const fieldNames = Object.keys(dataService.getSchema.properties);
const fieldLabels = Object.keys(dataService.getSchema.properties).map(
   i => dataService.getSchema.properties[i].label
   );
   

// RETRIEVE DATA (MODEL)
let data;
dataService.getFile(dataFile, (res) => {
   data = res;
});

// DEFINE LOGIC (CONTROLLER)
app.listen(port, () => console.log(`Listening on port ${port}`));
app.get("/", (req, res) => {
   // DEFINE TEMPLATE (VIEW)

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

   res.send(template.getTemplate(headerRow, bodyRows)).end();
})

