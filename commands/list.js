const fs = require("fs");
const path = require("path")

const jsonFilePath = path.resolve(__dirname, '../list.json')

const list = (callback) => {
  fs.readFile(jsonFilePath, (err, data) => {
    if (err) throw err;
    jsonData = JSON.parse(data.toString())
    console.log( '---===jsonData===---', jsonData )
    console.log("ID|  TASKS\n___________________")
    let filteredArray = jsonData.filter(data => data.completed === false)
    filteredArray.map(function(data) {
      console.log(data.id + " |  " + data.task)
    })
  })
}

module.exports = list 