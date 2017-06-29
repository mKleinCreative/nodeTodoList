const fs = require("fs");
const path = require("path")

const jsonFilePath = path.resolve(__dirname, '../list.json')


const complete = (id) => {
  const currentList = fs.readFile(jsonFilePath, (err, data) => {
    if (err) throw err
    var taskObject = JSON.parse(data)
    let index = id - 1
    
    if (taskObject[index].completed === false) {
      taskObject[index].completed = true
    }
    
    const updatedTaskList = JSON.stringify(taskObject, null, 2)
    const taskId = updatedTaskList[index]
    fs.writeFile(jsonFilePath, updatedTaskList, 'utf8', function(err) { 
      if (err) throw err
      console.log("Task complete "  + taskObject[index].task + ".")
    })

    return taskObject
  })
}

module.exports = complete