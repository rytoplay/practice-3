const fs = require('fs');

getFile = (fileName, callback) => {
   fs.readFile(fileName, (err, res) => {
      if (err) {throw err};
      callback(JSON.parse(res));
   });
}

const usersSchema = {
   "id" : "/Users",
   "type" : "object",
   "properties": {
      "userId" : {
         "label" : "User ID",
         "type" : Number
      },
      "firstName" : {
         "label" : "First Name",
         "type" : String
      },
      "lastName" : {
         "label" : "Last Name",
         "type" : String
      },
      "phoneNumber" : {
         "label" : "Phone Number",
         "type" : String
      },
      "emailAddress" : {
         "label" : "Email Address",
         "type" : String
      },
   }
}



exports.getFile = getFile;
exports.getSchema = usersSchema;
