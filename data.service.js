const fs = require('fs');

getFile = (fileName) => {
   console.log('m1', fileName);
      try {
         data = JSON.parse(fs.readFileSync(fileName));
      } catch(err) {
         throw err;
      };
      return data;
}

exports.getFile = getFile;
