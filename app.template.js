function getTemplate(headerRow, bodyRows) {

   return   `
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
}

exports.getTemplate = getTemplate;