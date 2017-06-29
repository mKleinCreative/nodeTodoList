const fs = require("fs");
const path = require("path");
const list = require("./list");

const jsonFilePath = path.resolve(__dirname, '../list.json')
let id = 0
let task = ""


const newTask = (task) => {
  const currentList = fs.readFile(jsonFilePath, (err, data) => {
    if (err) throw err
    var taskObject = JSON.parse(data)
    const id = taskObject.length + 1
    
    taskObject.push({
                      id, 
                      task: task, 
                      completed: false
                    })

    const updatedTaskList = JSON.stringify(taskObject, null, 2)

    fs.writeFile(jsonFilePath, updatedTaskList, 'utf8', function(err) { 
      if (err) throw err
      console.log("Created task " + id + ".")
    })

    return taskObject
  })
}


module.exports = newTask