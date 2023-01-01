const cheerio = require("cheerio")
const axios = require("axios")
// const fs = require('fs');
// const path = require('path');
   
// fs.mkdir(path.join(__dirname, '/Output.txt'), (err) => {
//     fs.writeFile('Output.txt', 'Hello world!\n', function() {
//         fs.readFile('/Project2/Output.txt', 'utf-8', function(err, data) {
//             console.log(data);
//         });
//     });
//     console.log('Directory created successfully!');
// });
axios.get("http://localhost:5054/").then(
    (response) => {
      if (response.status === 200) {
        const html = response.data;
         $ = cheerio.load(html);
         var htmlStr = $('.bo').html()
    
console.log(htmlStr)
//console.log(newstr)








      }
    },
    (error) => console.log(err)
  );
 
