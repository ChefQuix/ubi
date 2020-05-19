const csv = require('csv-parser')
const fs = require('fs')
//const results = [];
const files = ['federal taxpayers','federal taxes', 'federal taxable income'];

const results = files.map(file => {
  return promiseGetData(file);
});

Promise.all(results).then((values) => {
  const jsonContent = JSON.stringify(values);
  fs.writeFile("src/assets/tax_amounts.json", jsonContent, 'utf8', function (err) {
    if (err) {
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
    }
 
    console.log("JSON file has been saved.");
  });

});

async function promiseGetData(file) {
  var promiseFcn = function(resolve,reject) {
    const file_data = [];
    fs.createReadStream('src/assets/' + file + '.csv')
    .pipe(csv())
    .on('data', (data) => file_data.push(data))
    .on('end', () => {
      resolve({'file': file, 'data': file_data});
    })
  }
  return new Promise(promiseFcn);
}