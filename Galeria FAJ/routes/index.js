var express = require('express');
var router = express.Router();
var path = require('path');
const fs = require('fs');
let table = [];

router.get('/', function(req, res, next) {
  
  res.sendFile(path.join(__dirname, '../views/index.html'));

});

router.get('/GetDirectores', function(req, res, next) {
  let tableOne = [];
  let tableHelp = [];
  let tableMain = [];
 
  const directoryPath = path.join(__dirname, '../public/images');
  fs.readdir(directoryPath, function (err, directoryTwo) {
    directoryTwo.forEach(function (file) {
        tableOne.push(file);
    })
    tableMain.push(tableOne);
    for(let x=0; x<tableOne.length; x++) {
      console.log(table[x]);
      const directoryPath = path.join(__dirname, '../public/images/' + tableOne[x]);
      fs.readdir(directoryPath, function (err, directoryTwo) {
      directoryTwo.forEach(function (file) {
          tableHelp.push(file);
      })
  
      tableMain.push(tableHelp);
      console.log(tableMain);
      tableHelp = [];
      console.log('udane');
      if(x == (tableOne.length-1)) {
        console.log('udane');
        res.status(200).send(tableMain);
      }
      });
      }
    
  });
});


module.exports = router;


