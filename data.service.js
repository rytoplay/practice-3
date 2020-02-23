const fs = require('fs');

getFile = (fileName) => {
      try {
         data = JSON.parse(fs.readFileSync(fileName));
      } catch(err) {
         throw err;
      };
      return data;
}

getFieldNames = [
   {"name": "userId", "label": "User ID"},
   {"name": "firstName", "label": "First Name"},
   {"name": "lastName", "label": "Last Name"},
   {"name": "phoneNumber", "label": "Phone Number"},
   {"name": "emailAddress", "label": "Email Address"},
];

exports.getFile = getFile;
exports.getFieldNames = getFieldNames;
