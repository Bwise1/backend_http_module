const { readFile, writeFile, modifyFile } = require("../utils/fileManagement");
const Task = {
  id: String,
  title: String,
  status: String,
  due_date: Date,
  priority: String,
  category: String,
  description: String,
  user_id: String,
};

const taskFile = "./data/task.json";

function createTask(task) {
  writeFile(taskFile, task);
  return task;
}

function getUsersTasks(id) {
  let tasks = readFile(taskFile);
  return filterByElement(tasks, id, "user_id");
}

function getUsersTasksByID(id, taskId) {
  let usersTasks = getUsersTasks(id);
  return filterByElement(usersTasks, taskId, "id");
}

function deleteUsersTaskByID(id, taskId) {
  //  let usersTasks = getUsersTasks(id);
  //get users tasks. check if the given id is in the users tasks

  let tasks = readFile(taskFile);
  for (let i in tasks) {
    // console.log("id: ", tasks[i].id, "taskId: ", taskId);
    if (tasks[i].id === taskId) {
      tasks.splice(i, 1);
    }
  }

  [{ id: 3 }, { id: 3 }, { id: 2 }, { id: 6 }];
  // [({ id: 3, taskId: 19 }, { id: 3, taskId: 12 })];

  //splice
  [{ id: 3, taskId: 12 }];
  console.log(tasks);
  modifyFile(taskFile, tasks);
  [{ id: 3, taskId: 12 }];
}

function filterByElement(array, value, key) {
  return array.filter((task) => task[key] === value);
}

// let tasks = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

//write a loop that goes through all the array elements
//in the loop check for id that is divisible by 2 without remainder
//create a new array and append them to it.

// let evenTask = [];
// for (let i in tasks) {
//   if (tasks[i].id % 2 == 0) {
//     evenTask.push(tasks[i]);
//   }
// }

module.exports = {
  createTask,
  getUsersTasks,
  getUsersTasksByID,
  deleteUsersTaskByID,
};
